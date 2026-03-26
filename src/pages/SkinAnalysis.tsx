import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Upload, Scan, Sparkles, ArrowRight, Camera, Droplets, SunMedium, ScanLine, WandSparkles, LayoutGrid, ThumbsUp, TriangleAlert, Clock3, Download, Shield, Aperture, ScanFace, Check, Circle, Layers3, Grid3X3, List } from "lucide-react";
import { jsPDF } from "jspdf";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const concerns = ["Acne", "Pigmentation", "Aging", "Dryness", "Oiliness", "Redness", "Dark Circles", "Texture"];

const diagnosticFocusAreas = [
  {
    key: "Aging",
    title: "Fine Lines & Wrinkles",
    subtitle: "Fine lines and elasticity",
    icon: Sparkles,
  },
  {
    key: "Pigmentation",
    title: "Hyperpigmentation",
    subtitle: "Dark spots and uneven tone",
    icon: Camera,
  },
  {
    key: "Texture",
    title: "Texture & Pores",
    subtitle: "Roughness and visible pore size",
    icon: Grid3X3,
  },
  {
    key: "Redness",
    title: "Redness & Sensitivity",
    subtitle: "Calming reactive skin barriers",
    icon: Shield,
  },
];

const scanGuidelines = [
  {
    title: "Natural Lighting",
    description: "Avoid harsh shadows or direct sunlight which may distort texture data.",
    icon: Sparkles,
  },
  {
    title: "Clean Canvas",
    description: "Remove glasses and ensure your hair is pulled back from your forehead.",
    icon: Aperture,
  },
  {
    title: "Straight Angle",
    description: "Look directly into the camera lens. Keep your expression neutral.",
    icon: ScanFace,
  },
];

const diagnosticCapabilities = [
  { layer: "Layer 01", title: "Epithelial Map", icon: Camera },
  { layer: "Layer 02", title: "Sebum Density", icon: Droplets },
  { layer: "Layer 03", title: "Structural Matrix", icon: Grid3X3 },
  { layer: "Layer 04", title: "UV Impact", icon: List },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const reportMetrics = [
  { label: "Acne Level", value: "Mild", progress: "35%", color: "bg-[#6a63d3]", icon: ScanLine, iconBg: "bg-[#ecebff]", iconColor: "text-[#6a63d3]" },
  { label: "Oil Levels", value: "Balanced", progress: "50%", color: "bg-[#d4b327]", icon: Droplets, iconBg: "bg-[#f8f0d5]", iconColor: "text-[#b78f12]" },
  { label: "Pigmentation", value: "Moderate", progress: "58%", color: "bg-[#5c62bf]", icon: WandSparkles, iconBg: "bg-[#eef0ff]", iconColor: "text-[#5c62bf]" },
  { label: "Redness", value: "Low", progress: "20%", color: "bg-[#e04d5d]", icon: Sparkles, iconBg: "bg-[#ffe8ea]", iconColor: "text-[#d53e4f]" },
  { label: "Texture", value: "Smooth", progress: "72%", color: "bg-[#8a84ff]", icon: LayoutGrid, iconBg: "bg-[#f0efff]", iconColor: "text-[#7a72ee]" },
];

const skinNeeds = [
  "Your current breakout pattern suggests hormonal fluctuations. Prioritize calming agents during your luteal phase.",
  "The scan detected increased T-zone oil production. Consider a double cleanse at night to ensure full debris removal.",
];

const routineColumns = [
  {
    title: "Morning Ritual",
    stepsLabel: "3 Steps",
    dark: false,
    items: [
      {
        title: "Gentle Cleanser",
        detail: "Recommended to preserve natural lipids while removing overnight residue.",
      },
      {
        title: "Vitamin C Serum",
        detail: "Antioxidant protection against environmental stressors and UV-induced pigment.",
      },
      {
        title: "SPF 50+ Broad Spectrum",
        detail: "Critical to prevent further pigmentation darkening and protect active treatments.",
      },
    ],
  },
  {
    title: "Night Recovery",
    stepsLabel: "3 Steps",
    dark: true,
    items: [
      {
        title: "Oil-Based Cleanser",
        detail: "Dissolves sunscreen and urban pollutants that clog combination skin pores.",
      },
      {
        title: "Salicylic Acid Treatment",
        detail: "Exfoliates deep inside the pore lining to target active acne lesions.",
      },
      {
        title: "Barrier Repair Cream",
        detail: "Rich in ceramides to seal in hydration and mitigate active ingredient irritation.",
      },
    ],
  },
];

const curatedProducts = [
  {
    name: "Blemish Clarifying Serum",
    subtitle: "Intensive Corrective Treatment",
    tags: ["2% Salicylic", "Zinc PCA"],
    description: "Targets overactive sebaceous glands without dehydrating the epidermis.",
    background: "from-[#f9d89f] via-[#f5cb8a] to-[#dfac66]",
    style: "dropper",
  },
  {
    name: "Niacinamide Glow Drop",
    subtitle: "Texture & Pore Refiner",
    tags: ["10% Niacinamide", "Rice Water"],
    description: "Stabilizes oil production and significantly reduces the appearance of enlarged pores.",
    background: "from-[#353a41] via-[#191c21] to-[#525b62]",
    style: "serum",
  },
  {
    name: "Lipid Restore Balm",
    subtitle: "Deep Hydration Barrier",
    tags: ["Ceramides", "Squalane"],
    description: "Strengthens the protective barrier to prevent transepidermal water loss.",
    background: "from-[#8d67c7] via-[#a98ae0] to-[#d5c3ff]",
    style: "jar",
  },
];

const intelligenceGroups = [
  {
    title: "Recommended Ingredients",
    icon: ThumbsUp,
    tint: "bg-[linear-gradient(180deg,#f1f0ff_0%,#eceaff_100%)]",
    iconColor: "text-primary",
    textColor: "text-primary",
    pills: ["Niacinamide", "Salicylic Acid", "Azelaic Acid", "Squalane"],
  },
  {
    title: "Avoid Right Now",
    icon: TriangleAlert,
    tint: "bg-[linear-gradient(180deg,#fff2f4_0%,#fbeef1_100%)]",
    iconColor: "text-[#dc5461]",
    textColor: "text-[#dc5461]",
    pills: ["Harsh alcohols (Denat)", "Physical Scrubs", "Synthetic Fragrance"],
  },
];

const ProductCardArtwork = ({ style }: { style: "dropper" | "serum" | "jar" }) => {
  if (style === "serum") {
    return (
      <div className="relative flex h-full items-end justify-center pb-5">
        <div className="absolute bottom-4 h-3 w-32 rounded-full bg-black/20 blur-sm" />
        <div className="absolute bottom-6 h-32 w-14 rounded-[0.7rem] bg-[#8d7a1e]/90 shadow-[0_16px_30px_rgba(0,0,0,0.28)]" />
        <div className="absolute bottom-36 h-6 w-6 rounded-md bg-[#f4f0de]" />
        <div className="absolute bottom-[10.4rem] h-8 w-2 rounded-full bg-[#ebe7d9]" />
        <div className="absolute bottom-9 h-20 w-11 rounded-[0.55rem] border border-white/30 bg-[#dac85f]/45" />
      </div>
    );
  }

  if (style === "jar") {
    return (
      <div className="relative flex h-full items-end justify-center pb-7">
        <div className="absolute bottom-6 h-4 w-28 rounded-full bg-[#6d52b9]/25 blur-sm" />
        <div className="absolute bottom-10 h-20 w-28 rounded-[1.1rem] border border-white/60 bg-[rgba(255,255,255,0.68)] shadow-[0_20px_40px_rgba(82,55,138,0.18)] backdrop-blur-md" />
        <div className="absolute bottom-26 h-5 w-26 rounded-full bg-[#e8dcff]" />
        <div className="absolute bottom-[6.85rem] h-8 w-18 rounded-[50%_50%_38%_38%] bg-[#fff8ff]" />
      </div>
    );
  }

  return (
    <div className="relative flex h-full items-end justify-center pb-5">
      <div className="absolute bottom-4 h-3 w-28 rounded-full bg-[#815e26]/18 blur-sm" />
      <div className="absolute bottom-6 h-36 w-16 rounded-[1.1rem] bg-white shadow-[0_18px_34px_rgba(121,84,32,0.22)]" />
      <div className="absolute bottom-40 h-5 w-6 rounded-sm bg-[#1f2d33]" />
      <div className="absolute bottom-[10.4rem] h-10 w-2 rounded-full bg-[#1f2d33]" />
      <div className="absolute bottom-12 h-16 w-9 rounded-sm bg-white/65" />
    </div>
  );
};

const SkinAnalysis = () => {
  const [selectedConcerns, setSelectedConcerns] = useState<string[]>([]);
  const [uploaded, setUploaded] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState("skin-photo.jpg");
  const [uploadedPreview, setUploadedPreview] = useState<string | null>(null);
  const [cameraOpen, setCameraOpen] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const currentStep = results ? 3 : uploaded && selectedConcerns.length > 0 ? 2 : uploaded ? 1 : 0;
  const stepProgressWidth = ["0%", "33.333%", "66.666%", "100%"][currentStep];

  useEffect(() => {
    return () => {
      if (uploadedPreview) {
        URL.revokeObjectURL(uploadedPreview);
      }
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, [uploadedPreview]);

  useEffect(() => {
    if (!results) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [results]);

  const toggleConcern = (c: string) => {
    setSelectedConcerns((prev) => prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]);
  };

  const handleAnalyze = () => {
    if (!uploaded || selectedConcerns.length === 0) return;
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setResults(true);
    }, 3000);
  };

  const handleFilePicked = (file?: File) => {
    if (!file) return;
    if (uploadedPreview) {
      URL.revokeObjectURL(uploadedPreview);
    }
    setUploadedPreview(URL.createObjectURL(file));
    setUploadedFileName(file.name);
    setUploaded(true);
    setResults(false);
  };

  const closeCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    setCameraOpen(false);
    setCameraError(null);
  };

  const openCamera = async () => {
    try {
      closeCamera();
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user", width: { ideal: 1280 }, height: { ideal: 720 } },
        audio: false,
      });

      streamRef.current = stream;
      setCameraOpen(true);
      setCameraError(null);

      window.setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          void videoRef.current.play().catch(() => undefined);
        }
      }, 0);
    } catch {
      setCameraError("Camera access was blocked or unavailable. Please allow camera permission and try again.");
      setCameraOpen(true);
    }
  };

  const capturePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const width = video.videoWidth || 1280;
    const height = video.videoHeight || 720;
    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.drawImage(video, 0, 0, width, height);
    const dataUrl = canvas.toDataURL("image/jpeg", 0.92);

    if (uploadedPreview) {
      URL.revokeObjectURL(uploadedPreview);
    }

    setUploadedPreview(dataUrl);
    setUploadedFileName("live-camera-capture.jpg");
    setUploaded(true);
    setResults(false);
    closeCamera();
  };

  const handleDownloadReport = () => {
    const primaryConcerns = selectedConcerns.length ? selectedConcerns.slice(0, 2) : ["Acne", "Pigmentation"];
    const doc = new jsPDF({ unit: "pt", format: "a4" });
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 44;
    const contentWidth = pageWidth - margin * 2;
    let y = margin;

    const ensureSpace = (needed = 24) => {
      if (y + needed <= pageHeight - margin) return;
      doc.addPage();
      y = margin;
    };

    const addTextBlock = (
      text: string,
      options?: { size?: number; color?: [number, number, number]; weight?: "normal" | "bold"; gap?: number },
    ) => {
      const size = options?.size ?? 11;
      const color = options?.color ?? [22, 24, 38];
      const gap = options?.gap ?? 16;
      doc.setFont("helvetica", options?.weight === "bold" ? "bold" : "normal");
      doc.setFontSize(size);
      doc.setTextColor(color[0], color[1], color[2]);
      const lines = doc.splitTextToSize(text, contentWidth);
      const lineHeight = size * 1.45;
      ensureSpace(lines.length * lineHeight + gap);
      doc.text(lines, margin, y);
      y += lines.length * lineHeight + gap;
    };

    doc.setFillColor(245, 244, 255);
    doc.roundedRect(margin, y, contentWidth, 132, 24, 24, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(107, 99, 213);
    doc.text("THE INGREDIENT DERM (TID)", margin + 22, y + 24);
    doc.setFontSize(26);
    doc.setTextColor(20, 24, 36);
    doc.text("Your Personalized", margin + 22, y + 54);
    doc.text("Skin Analysis Report", margin + 22, y + 84);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.setTextColor(102, 106, 125);
    doc.text("Based on your unique skin profile and AI-powered analysis.", margin + 22, y + 108);
    doc.text("Reviewed by our clinical network.", margin + 22, y + 124);
    y += 162;

    addTextBlock(`Patient: Alexa Whittaker`, { size: 12, weight: "bold", gap: 8 });
    addTextBlock(`Date: March 25, 2026`, { size: 11, color: [102, 106, 125], gap: 8 });
    addTextBlock(`Uploaded file: ${uploadedFileName}`, { size: 11, color: [102, 106, 125], gap: 18 });

    addTextBlock(`Overview`, { size: 18, weight: "bold", gap: 10 });
    addTextBlock(`Skin Type: Combination`, { gap: 6 });
    addTextBlock(`Score: 78/100`, { gap: 6 });
    addTextBlock(`AI Confidence: 98%`, { gap: 6 });
    addTextBlock(`Primary Concerns: ${primaryConcerns.join(", ")}`, { gap: 18 });

    addTextBlock(`What Your Skin Needs Right Now`, { size: 18, weight: "bold", gap: 10 });
    skinNeeds.forEach((item, index) => {
      addTextBlock(`${String(index + 1).padStart(2, "0")}  ${item}`, { gap: 10 });
    });
    y += 6;

    addTextBlock(`Personalized Routine`, { size: 18, weight: "bold", gap: 10 });
    routineColumns.forEach((column) => {
      addTextBlock(`${column.title} (${column.stepsLabel})`, { size: 13, weight: "bold", color: [37, 35, 93], gap: 8 });
      column.items.forEach((item, index) => {
        addTextBlock(`${String(index + 1).padStart(2, "0")}  ${item.title}: ${item.detail}`, { size: 10.5, color: [70, 74, 90], gap: 8 });
      });
      y += 6;
    });

    addTextBlock(`Curated Selection`, { size: 18, weight: "bold", gap: 10 });
    curatedProducts.forEach((product) => {
      addTextBlock(`${product.name} - ${product.subtitle}`, { size: 12, weight: "bold", gap: 6 });
      addTextBlock(product.description, { size: 10.5, color: [70, 74, 90], gap: 4 });
      addTextBlock(`Key ingredients: ${product.tags.join(", ")}`, { size: 10, color: [107, 99, 213], gap: 10 });
    });

    addTextBlock(`Ingredient Intelligence`, { size: 18, weight: "bold", gap: 10 });
    addTextBlock(`Recommended Ingredients: ${intelligenceGroups[0].pills.join(", ")}`, { gap: 8 });
    addTextBlock(`Avoid Right Now: ${intelligenceGroups[1].pills.join(", ")}`, { gap: 16 });

    addTextBlock(`Medical Disclaimer`, { size: 16, weight: "bold", gap: 8 });
    addTextBlock(
      "This AI analysis is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.",
      { size: 10, color: [102, 106, 125], gap: 10 },
    );

    doc.save(`tid-skin-report-${new Date().toISOString().slice(0, 10)}.pdf`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <canvas ref={canvasRef} className="hidden" />
        <section className="gradient-hero py-20">
          <div className="container mx-auto max-w-[1440px] px-4 lg:px-8">
            <motion.div initial="hidden" animate="visible" className="text-center mb-12">
              <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Sparkles size={16} />
                AI-Powered Analysis
              </motion.div>
              <motion.h1 variants={fadeUp} custom={1} className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Understand Your Skin
              </motion.h1>
              <motion.p variants={fadeUp} custom={2} className="text-lg text-muted-foreground max-w-lg mx-auto">
                Upload a photo of your skin and our AI will analyze it in seconds.
              </motion.p>
            </motion.div>

            {!results ? (
              <motion.div initial="hidden" animate="visible" className="space-y-8">
                {/* Upload */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/png,image/jpeg,image/jpg"
                  className="hidden"
                  onChange={(event) => {
                    handleFilePicked(event.target.files?.[0]);
                  }}
                />
                <motion.div variants={fadeUp} custom={3} className="mb-10 flex justify-center">
                  <div className="w-full max-w-[430px] rounded-full bg-white/85 p-2 shadow-soft">
                    <div className="relative overflow-hidden rounded-full bg-[#f0f1fb] px-4 py-3">
                      <motion.div
                        animate={{ width: stepProgressWidth }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="absolute inset-y-0 left-0 rounded-full bg-[linear-gradient(135deg,#6e64d7_0%,#8d84f2_100%)]"
                      />

                      <div className="relative z-10 grid grid-cols-3 items-center">
                        {[
                          { step: "1", label: "Upload" },
                          { step: "2", label: "Concerns" },
                          { step: "3", label: "Results" },
                        ].map((item, index) => {
                          const isReached = currentStep >= index + 1;

                          return (
                            <div
                              key={item.label}
                              className={`flex items-center justify-center gap-2 text-sm font-medium transition-colors ${
                                isReached ? "text-primary-foreground" : "text-muted-foreground"
                              }`}
                            >
                              <span
                                className={`flex h-6 w-6 items-center justify-center rounded-full text-[11px] transition-colors ${
                                  isReached
                                    ? "bg-white/20 text-primary-foreground"
                                    : "bg-white text-foreground shadow-sm"
                                }`}
                              >
                                {item.step}
                              </span>
                              <span>{item.label}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </motion.div>

                <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
                  <motion.div variants={fadeUp} custom={4} className="space-y-5">
                    <div className="relative overflow-hidden rounded-[2rem] border border-dashed border-border/80 bg-white/55 p-5 shadow-soft">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.9),rgba(236,239,252,0.85)_32%,rgba(221,228,244,0.96)_100%)]" />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(104,96,210,0.08)_100%)]" />
                      <div className="relative flex min-h-[470px] items-center justify-center overflow-hidden rounded-[1.6rem]">
                        {uploadedPreview ? (
                          <>
                            <img
                              src={uploadedPreview}
                              alt="Uploaded skin analysis preview"
                              className="absolute inset-0 h-full w-full scale-105 object-cover blur-[7px]"
                            />
                            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,11,23,0.16)_0%,rgba(9,11,23,0.34)_100%)]" />
                            <div className="absolute inset-0 border border-white/30" />
                            <motion.div
                              animate={{ y: [0, -10, 0], opacity: [0.5, 0.9, 0.5] }}
                              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                              className="absolute left-[18%] top-[22%] text-white/80"
                            >
                              <ScanLine className="h-6 w-6" />
                            </motion.div>
                            <motion.div
                              animate={{ y: [0, 12, 0], x: [0, -6, 0], opacity: [0.45, 0.85, 0.45] }}
                              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                              className="absolute right-[18%] top-[26%] text-white/70"
                            >
                              <Sparkles className="h-5 w-5" />
                            </motion.div>
                            <motion.div
                              animate={{ y: [0, -8, 0], x: [0, 8, 0], opacity: [0.4, 0.82, 0.4] }}
                              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                              className="absolute bottom-[24%] left-[24%] text-white/70"
                            >
                              <Aperture className="h-5 w-5" />
                            </motion.div>
                            <motion.div
                              animate={{ y: [0, 10, 0], opacity: [0.45, 0.9, 0.45] }}
                              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
                              className="absolute bottom-[22%] right-[22%] text-white/75"
                            >
                              <Layers3 className="h-5 w-5" />
                            </motion.div>
                          </>
                        ) : (
                          <>
                            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_24%,rgba(255,255,255,0.92),rgba(240,242,250,0.25)_40%,transparent_64%)]" />
                            <div className="absolute h-[88%] w-[60%] rounded-[48%_48%_44%_44%] bg-[radial-gradient(circle_at_50%_28%,rgba(250,234,228,0.95)_0%,rgba(230,206,196,0.92)_26%,rgba(207,215,231,0.75)_74%,rgba(201,210,227,0.28)_100%)] blur-[1px]" />
                            <div className="absolute h-[58%] w-[36%] rounded-[48%] border border-primary/20" />
                            <div className="absolute h-[36%] w-[22%] rounded-[48%] border border-primary/25" />
                            <div className="absolute h-[14%] w-[14%] rounded-full border border-primary/30" />
                          </>
                        )}

                        <div className="relative z-10 max-w-[320px] text-center">
                          <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl shadow-soft backdrop-blur-md ${
                            uploaded ? "bg-white/18 text-white" : "bg-white/85 text-primary"
                          }`}>
                            <Camera size={28} />
                          </div>
                          <h3 className={`mt-6 font-heading text-2xl font-bold ${uploaded ? "text-white" : "text-foreground"}`}>
                            {uploaded ? "Ready for Analysis" : "Upload or Take Photo"}
                          </h3>
                          <p className={`mt-3 text-sm leading-7 ${uploaded ? "text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.28)]" : "text-muted-foreground"}`}>
                            {uploaded
                              ? "Click on Run Analysis to start the AI scan."
                              : "Ensure your face is well-lit and centered. No makeup or filters for accurate results."}
                          </p>
                          {uploaded ? (
                            <div className="mt-5 rounded-2xl bg-white/14 px-5 py-4 text-center shadow-soft backdrop-blur-md">
                              <div className="flex items-center justify-center gap-3">
                                <motion.div
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
                                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/18 text-white"
                                >
                                  <Scan className="h-4 w-4" />
                                </motion.div>
                                <p className="text-sm font-medium text-white">Photo uploaded successfully</p>
                              </div>
                              <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/16">
                                <motion.div
                                  animate={{ x: ["-100%", "220%"] }}
                                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                                  className="h-full w-24 rounded-full bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.95)_50%,rgba(255,255,255,0)_100%)]"
                                />
                              </div>
                            </div>
                          ) : null}
                          <div className="mt-6 flex flex-wrap justify-center gap-3">
                            <Button
                              type="button"
                              onClick={openCamera}
                              className="h-12 rounded-full bg-primary px-6 text-primary-foreground hover:bg-primary/90"
                            >
                              <Camera size={16} className="mr-2" />
                              Take Photo
                            </Button>
                            <Button
                              type="button"
                              variant="outline"
                              onClick={() => fileInputRef.current?.click()}
                              className="h-12 rounded-full border-white/70 bg-white/90 px-6 text-foreground hover:bg-white hover:text-foreground"
                            >
                              <Upload size={16} className="mr-2" />
                              Select Image
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {cameraOpen ? (
                      <div className="rounded-[1.8rem] bg-[#151826] p-5 text-white shadow-[0_24px_60px_rgba(18,21,39,0.28)]">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <h4 className="font-heading text-2xl font-semibold">Live Camera Capture</h4>
                            <p className="mt-1 text-sm text-white/70">
                              Center your face, keep steady lighting, then capture a clear frame.
                            </p>
                          </div>
                          <Button
                            type="button"
                            variant="outline"
                            onClick={closeCamera}
                            className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                          >
                            Close Camera
                          </Button>
                        </div>

                        <div className="mt-5 overflow-hidden rounded-[1.4rem] border border-white/10 bg-black/40">
                          {cameraError ? (
                            <div className="flex min-h-[320px] items-center justify-center px-6 text-center text-sm leading-7 text-white/78">
                              {cameraError}
                            </div>
                          ) : (
                            <video
                              ref={videoRef}
                              autoPlay
                              playsInline
                              muted
                              className="h-[320px] w-full object-cover md:h-[420px]"
                            />
                          )}
                        </div>

                        <div className="mt-5 flex flex-wrap justify-center gap-3">
                          <Button
                            type="button"
                            onClick={capturePhoto}
                            disabled={!!cameraError}
                            className="h-12 rounded-full bg-[linear-gradient(135deg,#6e64d7_0%,#8d84f2_100%)] px-6 text-primary-foreground hover:opacity-95"
                          >
                            <Camera size={16} className="mr-2" />
                            Capture Photo
                          </Button>
                          <Button
                            type="button"
                            variant="outline"
                            onClick={openCamera}
                            className="h-12 rounded-full border-white/20 bg-white/5 px-6 text-white hover:bg-white/10 hover:text-white"
                          >
                            Retry Camera
                          </Button>
                        </div>
                      </div>
                    ) : null}

                    <div className="grid gap-4 md:grid-cols-3">
                      {scanGuidelines.map((item) => (
                        <div key={item.title} className="rounded-[1.5rem] bg-white/80 p-5 shadow-soft">
                          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                            <item.icon className="h-4 w-4" />
                          </div>
                          <h4 className="mt-4 font-heading text-lg font-semibold text-foreground">{item.title}</h4>
                          <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div variants={fadeUp} custom={5} className="space-y-5">
                    <div className="rounded-[2rem] bg-white/80 p-6 shadow-soft">
                      <h3 className="font-heading text-3xl font-bold text-foreground">Focus Areas</h3>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">
                        What are your primary skin goals today? Select all that apply.
                      </p>

                      <div className="mt-6 space-y-3">
                        {diagnosticFocusAreas.map((area) => {
                          const active = selectedConcerns.includes(area.key);
                          return (
                            <button
                              key={area.key}
                              type="button"
                              onClick={() => toggleConcern(area.key)}
                              className={`flex w-full items-center gap-4 rounded-[1.25rem] border p-4 text-left transition-all ${
                                active
                                  ? "border-primary/40 bg-primary/5 shadow-soft"
                                  : "border-border bg-white hover:border-primary/25 hover:bg-muted/40"
                              }`}
                            >
                              <div className={`flex h-11 w-11 items-center justify-center rounded-2xl ${active ? "bg-primary/12 text-primary" : "bg-muted text-muted-foreground"}`}>
                                <area.icon className="h-4.5 w-4.5" />
                              </div>
                              <div className="flex-1">
                                <p className="font-heading text-lg font-semibold text-foreground">{area.title}</p>
                                <p className="mt-1 text-sm text-muted-foreground">{area.subtitle}</p>
                              </div>
                              <div className={`flex h-5 w-5 items-center justify-center rounded-md border ${active ? "border-primary bg-primary text-primary-foreground" : "border-border bg-white"}`}>
                                {active ? <Check className="h-3.5 w-3.5" /> : <Circle className="h-2.5 w-2.5 opacity-0" />}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="rounded-[1.6rem] bg-[linear-gradient(180deg,#f1efff_0%,#ece8ff_100%)] p-5 shadow-soft">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/80 text-primary">
                          <Scan className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">AI Engine Ready</p>
                          <p className="text-sm text-muted-foreground">
                            {uploaded ? "Awaiting image upload for analysis." : "Awaiting image upload for analysis."}
                          </p>
                        </div>
                      </div>
                    </div>

                    <Button
                      size="lg"
                      onClick={handleAnalyze}
                      disabled={!uploaded || selectedConcerns.length === 0 || analyzing}
                      className={`relative h-14 w-full overflow-hidden rounded-full text-base font-medium disabled:cursor-not-allowed ${
                        uploaded && selectedConcerns.length > 0
                          ? "bg-[linear-gradient(135deg,#6e64d7_0%,#8d84f2_100%)] text-primary-foreground hover:opacity-95"
                          : "bg-[#c9c4d8] text-foreground hover:bg-[#bbb5cf] disabled:opacity-60"
                      }`}
                    >
                      {analyzing ? (
                        <motion.div
                          animate={{ x: ["-100%", "220%"] }}
                          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                          className="absolute inset-y-0 left-0 w-28 rounded-full bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.32)_50%,rgba(255,255,255,0)_100%)]"
                        />
                      ) : null}
                      {analyzing ? (
                        <span className="relative z-10 flex items-center gap-2 text-primary-foreground">
                          <Scan size={18} className="animate-spin" />
                          Running Analysis...
                        </span>
                      ) : (
                        <span className="relative z-10">Run Analysis</span>
                      )}
                    </Button>
                  </motion.div>
                </div>

                <motion.div variants={fadeUp} custom={6} className="pt-14">
                  <h3 className="text-center font-heading text-3xl font-bold text-foreground sm:text-4xl">
                    Diagnostic Capabilities
                  </h3>
                  <div className="mt-10 rounded-[2rem] bg-white/80 p-6 shadow-soft sm:p-8">
                    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                      {diagnosticCapabilities.map((item) => (
                        <div key={item.title} className="text-center">
                          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <item.icon className="h-5 w-5" />
                          </div>
                          <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                            {item.layer}
                          </p>
                          <p className="mt-2 font-heading text-xl font-semibold text-foreground">{item.title}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div initial="hidden" animate="visible" className="space-y-6">
                <motion.div variants={fadeUp} custom={0} className="rounded-[2rem] border border-white/60 bg-white/80 p-6 shadow-soft sm:p-8">
                  <div className="flex flex-col gap-6 border-b border-border/70 pb-8 lg:flex-row lg:items-end lg:justify-between">
                    <div className="max-w-xl">
                      <div className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
                        <span className="h-px w-8 bg-primary/70" />
                        The Ingredient Derm (TID)
                      </div>
                      <h2 className="font-heading text-4xl font-bold leading-[0.95] text-foreground sm:text-5xl lg:text-6xl">
                        Your Personalized
                        <br />
                        Skin Analysis Report
                      </h2>
                      <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground sm:text-base">
                        Based on your unique skin profile and AI-powered analysis. Reviewed by our clinical network.
                      </p>
                    </div>

                    <div className="text-left lg:text-right">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">March 25, 2026</p>
                      <p className="mt-2 text-2xl font-semibold text-foreground">Alexa Whittaker</p>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-5 lg:grid-cols-[300px_1fr]">
                    <div className="rounded-[1.75rem] bg-muted/60 p-5">
                      <div className="flex items-start gap-4">
                        <div className="h-20 w-20 overflow-hidden rounded-2xl bg-[radial-gradient(circle_at_50%_28%,#f0c9b6_0%,#ba7d5c_26%,#3a2b33_62%,#241a22_100%)] shadow-sm">
                          <div className="flex h-full w-full items-center justify-center text-[10px] font-semibold uppercase tracking-[0.25em] text-white/80">
                            Skin
                          </div>
                        </div>
                        <div className="pt-2">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">Skin Type</p>
                          <p className="mt-1 text-2xl font-semibold text-foreground">Combination</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Primary Concerns</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {(selectedConcerns.length ? selectedConcerns.slice(0, 2) : ["Acne", "Pigmentation"]).map((item) => (
                            <span key={item} className="rounded-full bg-white px-3 py-1.5 text-xs text-foreground shadow-sm">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-8 flex items-center justify-between border-t border-border/70 pt-5">
                        <p className="text-sm text-muted-foreground">AI Confidence Score</p>
                        <p className="text-lg font-semibold text-primary">98%</p>
                      </div>
                    </div>

                    <div className="rounded-[1.75rem] bg-white p-5 shadow-[0_20px_50px_rgba(79,72,145,0.08)] sm:p-6">
                      <div className="grid gap-6 md:grid-cols-[140px_1fr] md:items-center">
                        <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full bg-[conic-gradient(from_220deg,#635bc7_0_78%,#e6e7f0_78%_100%)] p-1.5">
                          <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-white">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Score</p>
                            <p className="mt-1 text-5xl font-bold leading-none text-foreground">78</p>
                            <p className="mt-1 text-sm font-semibold text-muted-foreground">/100</p>
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center gap-3">
                            <SunMedium className="h-5 w-5 text-primary" />
                            <h3 className="font-heading text-3xl font-bold text-foreground">Steady Progress</h3>
                          </div>
                          <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                            Your skin is improving with proper care. We've detected a 12% reduction in active inflammation since your last scan in April.
                          </p>
                          <div className="mt-6">
                            <div className="h-2 rounded-full bg-muted">
                              <div className="h-2 rounded-full bg-primary" style={{ width: "78%" }} />
                            </div>
                            <div className="mt-3 flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                              <span>April (66)</span>
                              <span>Target (90+)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} custom={1}>
                  <h3 className="font-heading text-3xl font-bold text-foreground">Detailed Analysis</h3>
                  <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                    {reportMetrics.map((item, i) => (
                      <motion.div
                        key={item.label}
                        variants={fadeUp}
                        custom={i + 2}
                        className="rounded-[1.6rem] bg-white/75 p-5 shadow-soft"
                      >
                        <div className={`flex h-10 w-10 items-center justify-center rounded-2xl ${item.iconBg}`}>
                          <item.icon className={`h-4 w-4 ${item.iconColor}`} />
                        </div>
                        <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                          {item.label}
                        </p>
                        <p className="mt-2 text-xl font-semibold text-foreground">{item.value}</p>
                        <div className="mt-4 h-1.5 rounded-full bg-muted">
                          <div className={`h-1.5 rounded-full ${item.color}`} style={{ width: item.progress }} />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.section variants={fadeUp} custom={7} className="space-y-10">
                  <div className="rounded-[1.9rem] border border-white/60 bg-[linear-gradient(180deg,#f3f2ff_0%,#eff0ff_100%)] p-6 shadow-soft sm:p-8">
                    <div className="flex items-center gap-3">
                      <Sparkles className="h-5 w-5 text-primary" />
                      <h3 className="font-heading text-3xl font-bold text-foreground">
                        What your skin needs right now
                      </h3>
                    </div>
                    <div className="mt-6 grid gap-6 md:grid-cols-2">
                      {skinNeeds.map((item, index) => (
                        <div key={item} className="flex gap-4">
                          <span className="pt-0.5 text-lg font-semibold text-primary">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <p className="max-w-md text-sm leading-8 text-foreground/85">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-heading text-3xl font-bold text-foreground">Personalized Routine</h3>
                    <div className="mt-6 grid gap-5 lg:grid-cols-2">
                      {routineColumns.map((column) => (
                        <div
                          key={column.title}
                          className={`rounded-[1.8rem] px-6 py-7 shadow-soft sm:px-8 ${
                            column.dark
                              ? "bg-[#25235d] text-white shadow-[0_25px_60px_rgba(37,35,93,0.24)]"
                              : "bg-white text-foreground"
                          }`}
                        >
                          <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                              <SunMedium className={`h-4.5 w-4.5 ${column.dark ? "text-[#a7a3ff]" : "text-[#d0aa2f]"}`} />
                              <h4 className="text-2xl font-semibold">{column.title}</h4>
                            </div>
                            <span className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${column.dark ? "text-white/45" : "text-muted-foreground"}`}>
                              {column.stepsLabel}
                            </span>
                          </div>

                          <div className="mt-7 space-y-7">
                            {column.items.map((item, index) => (
                              <div key={item.title} className="grid grid-cols-[28px_1fr] gap-4">
                                <span className={`text-sm font-semibold ${column.dark ? "text-[#a7a3ff]" : "text-primary"}`}>
                                  {String(index + 1).padStart(2, "0")}
                                </span>
                                <div>
                                  <p className={`text-xl font-semibold ${column.dark ? "text-white" : "text-foreground"}`}>
                                    {item.title}
                                  </p>
                                  <p className={`mt-2 text-sm leading-7 ${column.dark ? "text-white/72" : "text-muted-foreground"}`}>
                                    {item.detail}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.section>

                <motion.section variants={fadeUp} custom={8} className="space-y-10">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-sm font-medium text-primary">
                        <Clock3 className="h-4 w-4" />
                        Recommended by Dr. Jackie
                      </div>
                      <h3 className="mt-2 font-heading text-3xl font-bold text-foreground sm:text-4xl">
                        Curated Selection
                      </h3>
                    </div>
                    <div className="rounded-full bg-muted px-4 py-2 text-sm text-primary">
                      Based on your skin analysis
                    </div>
                  </div>

                  <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {curatedProducts.map((product, index) => (
                      <motion.article
                        key={product.name}
                        variants={fadeUp}
                        custom={index + 9}
                        className="rounded-[2rem] bg-white p-4 shadow-soft"
                      >
                        <div className="relative h-[250px] overflow-hidden rounded-[1.5rem] bg-white">
                          <span className="absolute left-4 top-4 z-10 inline-flex items-center gap-2 rounded-full bg-white/72 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-foreground backdrop-blur-md">
                            <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                            Dr. Jackie Approved
                          </span>
                          <ProductCardArtwork style={product.style} />
                        </div>
                        <div className="px-1 pb-2 pt-5">
                          <div className="flex items-start justify-between gap-4">
                            <h3 className="font-heading text-[2rem] font-semibold leading-tight text-foreground">{product.name}</h3>
                            {product.price && (
                              <p className="pt-1 text-xl font-semibold text-primary">{product.price}</p>
                            )}
                          </div>
                          <p className="mt-1 text-sm font-medium text-muted-foreground">{product.subtitle}</p>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {product.tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full bg-muted px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.08em] text-foreground/80"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <p className="mt-4 text-sm leading-7 text-muted-foreground">{product.description}</p>
                        </div>
                      </motion.article>
                    ))}
                  </div>

                  <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                    <div>
                      <h3 className="font-heading text-3xl font-bold text-foreground">Ingredient Intelligence</h3>
                      <div className="mt-5 space-y-5">
                        {intelligenceGroups.map((group) => (
                          <div key={group.title} className={`rounded-[1.7rem] p-5 shadow-soft ${group.tint}`}>
                            <div className={`flex items-center gap-2 text-sm font-medium ${group.textColor}`}>
                              <group.icon className={`h-4 w-4 ${group.iconColor}`} />
                              {group.title}
                            </div>
                            <div className="mt-4 flex flex-wrap gap-3">
                              {group.pills.map((pill) => (
                                <span key={pill} className="rounded-full bg-white px-4 py-2 text-sm font-medium text-foreground shadow-sm">
                                  {pill}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-heading text-3xl font-bold text-foreground">Skin Journey</h3>
                      <div className="mt-5 grid grid-cols-2 gap-4">
                        <div className="relative h-[240px] overflow-hidden rounded-[1.6rem] bg-[radial-gradient(circle_at_65%_30%,#f7cbb7_0%,#d69277_22%,#a26558_45%,#704440_65%,#442e34_100%)] shadow-soft">
                          <div className="absolute inset-y-0 left-1/2 w-px bg-white/40" />
                          <div className="absolute bottom-3 left-3 rounded-full bg-black/45 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-white">
                            April 12
                          </div>
                        </div>
                        <div className="relative h-[240px] overflow-hidden rounded-[1.6rem] bg-[radial-gradient(circle_at_68%_30%,#ffd5bc_0%,#f2b58e_24%,#df9575_46%,#c17a68_62%,#8b5c71_100%)] shadow-soft ring-2 ring-primary/70">
                          <div className="absolute inset-y-0 left-1/2 w-px bg-white/35" />
                          <div className="absolute bottom-3 left-3 rounded-full bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-primary-foreground">
                            Today
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.section>

                <motion.section variants={fadeUp} custom={12} className="space-y-8">
                  <div className="rounded-[2rem] bg-[linear-gradient(135deg,#6860d2_0%,#867de9_100%)] px-7 py-8 text-primary-foreground shadow-[0_25px_70px_rgba(104,96,210,0.28)] sm:px-10 sm:py-10">
                    <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                      <div className="max-w-xl">
                        <h3 className="font-heading text-4xl font-bold leading-tight sm:text-5xl">
                          Ready for professional
                          <br />
                          medical guidance?
                        </h3>
                        <p className="mt-5 max-w-lg text-base leading-8 text-primary-foreground/82">
                          Your AI report is the first step. Book a 1:1 session with Dr. Jackie to finalize your clinical prescriptions.
                        </p>
                      </div>

                      <div className="flex lg:justify-end">
                        <Link to="/consult">
                          <Button className="h-14 rounded-2xl bg-white px-8 text-base text-primary hover:bg-white/92">
                            Book Consultation
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <p className="mx-auto max-w-3xl text-center text-xs leading-6 text-muted-foreground/85">
                    This AI analysis is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment.
                    Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
                    Never disregard professional medical advice or delay in seeking it because of something you have read in this report.
                  </p>
                </motion.section>

                <motion.div variants={fadeUp} custom={13} className="flex flex-wrap justify-center gap-4">
                  <Button
                    variant="outline"
                    className="rounded-full px-8 border-border text-foreground hover:bg-muted hover:text-foreground"
                    onClick={handleDownloadReport}
                  >
                    <Download size={16} className="mr-2" />
                    Download Report
                  </Button>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8">
                    Consult Dr. Jackie
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-full px-8 border-border hover:bg-muted"
                      onClick={() => {
                        closeCamera();
                        setResults(false);
                        setUploaded(false);
                        setSelectedConcerns([]);
                        setUploadedFileName("skin-photo.jpg");
                        if (uploadedPreview) {
                          URL.revokeObjectURL(uploadedPreview);
                        }
                        setUploadedPreview(null);
                        if (fileInputRef.current) {
                          fileInputRef.current.value = "";
                        }
                      }}
                  >
                    Start Over
                  </Button>
                </motion.div>
              </motion.div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SkinAnalysis;
