"use client";
import { useState, useRef, useEffect, useCallback } from "react";

const CONFIG = {
  BACKEND_URL: "https://widget.numbero.org",
  ASSISTANT_ID: "assistant_plumbing_time_plumbing_heating_electric_inc_1780403948",
  BADGE_TEXT: "Time Plumbing AI",
  TITLE: "Time Plumbing, Heating & Electric",
  SUBTITLE: "Denver's Trusted Plumber Since 1980",
  START_BUTTON_TEXT: "Call Now — Free",
  END_BUTTON_TEXT: "End Call",
  STATUS_READY: "Ready to help",
  STATUS_CONNECTED: "Connected",
  GREETING_TEXT:
    "Hi! I'm the AI receptionist for Time Plumbing, Heating & Electric. How can I help you today?",
  CONNECTING_TEXT: "Connecting to Time Plumbing...",
  CONNECTED_TEXT: "Connected — speak now",
  AGENT_READY_TEXT: "Time Plumbing AI is ready",
  DISCONNECTED_TEXT: "Call ended",
  CONNECTION_FAILED_TEXT:
    "Connection failed — please call (303) 758-6237 directly",
  PRIMARY_COLOR: "#1a4b8c",
  ACCENT_COLOR: "#e85d04",
  END_BUTTON_COLOR: "#dc2626",
  SUCCESS_COLOR: "#16a34a",
};

type ConnectionStatus =
  | "idle"
  | "connecting"
  | "connected"
  | "disconnected"
  | "error";

export default function VoiceWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<ConnectionStatus>("idle");
  const [messages, setMessages] = useState<string[]>([]);
  const wsRef = useRef<WebSocket | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);

  const cleanup = useCallback(() => {
    if (wsRef.current) {
      wsRef.current.close();
      wsRef.current = null;
    }
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((t) => t.stop());
      mediaStreamRef.current = null;
    }
    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }
  }, []);

  useEffect(() => {
    return cleanup;
  }, [cleanup]);

  const startCall = useCallback(async () => {
    try {
      setStatus("connecting");
      setMessages([CONFIG.CONNECTING_TEXT]);

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaStreamRef.current = stream;
      audioContextRef.current = new AudioContext({ sampleRate: 16000 });

      const wsUrl = `${CONFIG.BACKEND_URL.replace(/^http/, "ws")}/ws?assistant_id=${CONFIG.ASSISTANT_ID}`;
      const ws = new WebSocket(wsUrl);
      wsRef.current = ws;

      ws.onopen = () => {
        setStatus("connected");
        setMessages((prev) => [...prev, CONFIG.CONNECTED_TEXT]);
      };

      ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          if (data.type === "transcript" && data.text) {
            setMessages((prev) => [...prev, data.text]);
          } else if (data.type === "agent_response" && data.text) {
            setMessages((prev) => [...prev, data.text]);
          } else if (data.type === "ready") {
            setMessages((prev) => [...prev, CONFIG.AGENT_READY_TEXT]);
          }
        } catch {
          // binary audio data — ignore
        }
      };

      ws.onerror = () => {
        setStatus("error");
        setMessages((prev) => [...prev, CONFIG.CONNECTION_FAILED_TEXT]);
        cleanup();
      };

      ws.onclose = () => {
        setStatus((prev) => {
          if (prev === "connected") {
            setMessages((m) => [...m, CONFIG.DISCONNECTED_TEXT]);
            return "disconnected";
          }
          return prev;
        });
      };

      const source = audioContextRef.current.createMediaStreamSource(stream);
      const processor = audioContextRef.current.createScriptProcessor(
        4096,
        1,
        1
      );
      processor.onaudioprocess = (e) => {
        if (ws.readyState === WebSocket.OPEN) {
          const inputData = e.inputBuffer.getChannelData(0);
          const pcm16 = new Int16Array(inputData.length);
          for (let i = 0; i < inputData.length; i++) {
            pcm16[i] = Math.max(
              -32768,
              Math.min(32767, Math.floor(inputData[i] * 32768))
            );
          }
          ws.send(pcm16.buffer);
        }
      };
      source.connect(processor);
      processor.connect(audioContextRef.current.destination);
    } catch {
      setStatus("error");
      setMessages((prev) => [...prev, CONFIG.CONNECTION_FAILED_TEXT]);
      cleanup();
    }
  }, [cleanup]);

  const endCall = useCallback(() => {
    cleanup();
    setStatus("disconnected");
    setMessages((prev) => [...prev, CONFIG.DISCONNECTED_TEXT]);
  }, [cleanup]);

  const getStatusText = () => {
    switch (status) {
      case "idle":
        return CONFIG.STATUS_READY;
      case "connecting":
        return CONFIG.CONNECTING_TEXT;
      case "connected":
        return CONFIG.STATUS_CONNECTED;
      case "disconnected":
        return CONFIG.DISCONNECTED_TEXT;
      case "error":
        return CONFIG.CONNECTION_FAILED_TEXT;
      default:
        return CONFIG.STATUS_READY;
    }
  };

  const statusDotColor = () => {
    switch (status) {
      case "connected":
        return CONFIG.SUCCESS_COLOR;
      case "error":
        return CONFIG.END_BUTTON_COLOR;
      case "connecting":
        return CONFIG.ACCENT_COLOR;
      default:
        return "#9CA3AF";
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full px-5 py-3.5 text-white shadow-2xl transition-all duration-300 hover:scale-105 cta-glow"
        style={{
          background: `linear-gradient(135deg, ${CONFIG.PRIMARY_COLOR}, ${CONFIG.ACCENT_COLOR})`,
        }}
        aria-label="Open voice assistant"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
          <line x1="12" y1="19" x2="12" y2="23" />
          <line x1="8" y1="23" x2="16" y2="23" />
        </svg>
        <span className="font-semibold text-sm tracking-wide hidden sm:inline">
          {CONFIG.BADGE_TEXT}
        </span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-4 sm:p-6">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => {
              if (status === "connected") endCall();
              setIsOpen(false);
              setStatus("idle");
              setMessages([]);
            }}
          />

          <div
            className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl"
            style={{
              background: "white",
              animation: "slide-up 0.35s ease-out",
            }}
          >
            <div
              className="px-6 py-5 text-white"
              style={{
                background: `linear-gradient(135deg, ${CONFIG.PRIMARY_COLOR} 0%, #0e3160 100%)`,
              }}
            >
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-heading text-lg font-bold">
                  {CONFIG.TITLE}
                </h3>
                <button
                  onClick={() => {
                    if (status === "connected") endCall();
                    setIsOpen(false);
                    setStatus("idle");
                    setMessages([]);
                  }}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
              <p className="text-white/80 text-sm">{CONFIG.SUBTITLE}</p>
            </div>

            <div className="px-6 py-3 border-b border-gray-100 flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: statusDotColor() }}
              />
              <span className="text-sm text-gray-600">{getStatusText()}</span>
            </div>

            <div className="px-6 py-4 h-48 overflow-y-auto space-y-3">
              {messages.length === 0 && (
                <div className="text-center text-gray-400 text-sm py-8">
                  <p>{CONFIG.GREETING_TEXT}</p>
                </div>
              )}
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className="text-sm text-gray-700 bg-gray-50 rounded-lg px-3 py-2"
                >
                  {msg}
                </div>
              ))}
            </div>

            <div className="px-6 py-4 border-t border-gray-100">
              {status === "connected" ? (
                <button
                  onClick={endCall}
                  className="w-full py-3 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90"
                  style={{ background: CONFIG.END_BUTTON_COLOR }}
                >
                  {CONFIG.END_BUTTON_TEXT}
                </button>
              ) : (
                <button
                  onClick={startCall}
                  disabled={status === "connecting"}
                  className="w-full py-3 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90 disabled:opacity-50"
                  style={{
                    background: `linear-gradient(135deg, ${CONFIG.PRIMARY_COLOR}, ${CONFIG.ACCENT_COLOR})`,
                  }}
                >
                  {status === "connecting"
                    ? CONFIG.CONNECTING_TEXT
                    : CONFIG.START_BUTTON_TEXT}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
