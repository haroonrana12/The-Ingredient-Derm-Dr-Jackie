type AbstractAiImageVariant =
  | "skin-before"
  | "skin-after"
  | "journal-blue"
  | "journal-gold"
  | "editor-acne"
  | "editor-conflict"
  | "editor-routine"
  | "lab-blue";

type AbstractAiImageProps = {
  variant: AbstractAiImageVariant;
  className?: string;
};

const shellClass =
  "relative h-full w-full overflow-hidden";

export function AbstractAiImage({ variant, className = "" }: AbstractAiImageProps) {
  if (variant === "skin-before") {
    return (
      <div className={`${shellClass} ${className}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_38%,#f2c7ad_0%,#de9d84_26%,#c17a70_46%,#8e5358_68%,#5a3741_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_78%,rgba(210,75,90,0.46),transparent_26%),radial-gradient(circle_at_72%_18%,rgba(255,255,255,0.2),transparent_24%)]" />
        <div className="absolute -left-10 top-10 h-80 w-80 rounded-full bg-[#f7d5c3]/45 blur-3xl" />
        <div className="absolute bottom-0 left-[-8%] h-[92%] w-[86%] rounded-[48%_42%_12%_0] bg-[radial-gradient(circle_at_52%_35%,rgba(248,212,191,0.95),rgba(233,178,154,0.88)_32%,rgba(202,127,119,0.78)_56%,rgba(117,68,73,0.86)_100%)]" />
        <div className="absolute left-[17%] top-[31%] h-16 w-24 rounded-[50%] border-b-4 border-[#4d2b2d]/60 bg-[radial-gradient(circle_at_50%_50%,#9fb0a9_0%,#647870_52%,#2d3333_100%)]" />
        <div className="absolute left-[8%] top-[52%] h-24 w-28 rounded-full bg-[#d25e67]/26 blur-xl" />
        <div className="absolute left-[20%] top-[55%] grid grid-cols-4 gap-2 opacity-80">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="h-2.5 w-2.5 rounded-full bg-[#c54e57]/75" />
          ))}
        </div>
      </div>
    );
  }

  if (variant === "skin-after") {
    return (
      <div className={`${shellClass} ${className}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_18%,#ffe2c5_0%,#f4bf97_22%,#d99f84_48%,#9d7280_74%,#5e4556_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_14%,rgba(255,255,255,0.5),transparent_20%),radial-gradient(circle_at_34%_60%,rgba(255,226,196,0.34),transparent_34%)]" />
        <div className="absolute left-[18%] top-[12%] h-[84%] w-[64%] rounded-[42%_42%_34%_34%] bg-[radial-gradient(circle_at_52%_28%,rgba(255,233,215,0.96),rgba(244,202,172,0.92)_26%,rgba(224,164,138,0.88)_52%,rgba(147,104,111,0.86)_100%)]" />
        <div className="absolute left-[27%] top-[28%] h-14 w-20 rounded-full border-b-4 border-[#523336]/50 bg-[radial-gradient(circle_at_50%_46%,#8ab0ba_0%,#57788b_46%,#24333a_100%)]" />
        <div className="absolute left-[54%] top-[28%] h-14 w-20 rounded-full border-b-4 border-[#523336]/50 bg-[radial-gradient(circle_at_50%_46%,#8ab0ba_0%,#57788b_46%,#24333a_100%)]" />
        <div className="absolute left-[34%] top-[56%] h-5 w-28 rounded-full bg-[linear-gradient(180deg,rgba(227,132,127,0.92),rgba(199,101,107,0.95))]" />
        <div className="absolute left-[48%] top-[40%] h-28 w-5 rounded-full bg-white/10 blur-md" />
      </div>
    );
  }

  if (variant === "journal-blue") {
    return (
      <div className={`${shellClass} ${className}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_24%,#7ee5ff_0%,#2f9ec1_20%,#143f5b_46%,#091421_100%)]" />
        <div className="absolute inset-x-0 bottom-[18%] h-[42%] bg-[radial-gradient(circle_at_50%_10%,#ffd3a1_0%,#f19b63_24%,transparent_28%)] opacity-90" />
        <div className="absolute left-[35%] top-[18%] h-[68%] w-[18%] rounded-[1.5rem_1.5rem_1rem_1rem] bg-[linear-gradient(180deg,#56d8ff_0%,#2598ba_42%,#10496a_100%)] shadow-[0_20px_60px_rgba(78,202,255,0.38)]" />
        <div className="absolute left-[35.8%] top-[10%] h-[18%] w-[16.4%] rounded-[1rem_1rem_0.4rem_0.4rem] bg-[#d4a35d]" />
        <div className="absolute left-[8%] bottom-[12%] h-[36%] w-[28%] rounded-[2rem_2rem_1.3rem_1.3rem] bg-[#f3b78d]/92 shadow-[0_20px_60px_rgba(255,186,129,0.22)]" />
        <div className="absolute right-[10%] top-[14%] h-20 w-20 rounded-full border border-white/30 bg-white/8" />
        <div className="absolute left-[5%] top-[12%] h-16 w-16 rounded-full bg-white/10 blur-xl" />
      </div>
    );
  }

  if (variant === "journal-gold") {
    return (
      <div className={`${shellClass} ${className}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_55%,#f3d068_0%,#d4941b_18%,#6e420c_44%,#20130a_100%)]" />
        {[
          "left-[18%] top-[18%]",
          "left-[34%] top-[36%]",
          "left-[54%] top-[14%]",
          "left-[66%] top-[42%]",
          "left-[80%] top-[24%]",
        ].map((pos, i) => (
          <div key={i} className={`absolute ${pos} h-16 w-16 rounded-full border border-white/30 bg-white/15 shadow-[0_0_25px_rgba(255,210,112,0.16)]`} />
        ))}
        <div className="absolute left-[24%] top-[24%] h-2 w-[20%] rotate-[28deg] bg-white/40" />
        <div className="absolute left-[44%] top-[28%] h-2 w-[16%] rotate-[-22deg] bg-white/35" />
        <div className="absolute left-[60%] top-[34%] h-2 w-[18%] rotate-[36deg] bg-white/35" />
        <div className="absolute left-[30%] top-[48%] h-2 w-[26%] rotate-[-12deg] bg-white/28" />
      </div>
    );
  }

  if (variant === "editor-acne") {
    return (
      <div className={`${shellClass} ${className}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_18%,#d7933a_0%,#915421_32%,#26140a_100%)]" />
        {Array.from({ length: 7 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-[180%] w-14 rounded-full bg-[linear-gradient(180deg,rgba(255,224,174,0.8),rgba(120,67,29,0.52))] blur-[1px]"
            style={{ left: `${8 + i * 13}%`, top: "-36%", transform: "rotate(26deg)" }}
          />
        ))}
      </div>
    );
  }

  if (variant === "editor-conflict") {
    return (
      <div className={`${shellClass} ${className}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_24%,#294a57_0%,#10222b_44%,#081117_100%)]" />
        <div className="absolute left-[46%] top-[15%] h-28 w-28 rounded-full bg-[radial-gradient(circle_at_42%_38%,#dce9ef_0%,#a7bdca_28%,#556974_58%,#1e2730_100%)] shadow-[0_10px_30px_rgba(173,213,227,0.25)]" />
        <div className="absolute left-[20%] top-[28%] h-1 w-[54%] bg-white/30" />
        <div className="absolute left-[50%] top-[28%] h-1 w-[26%] bg-white/24" />
        <div className="absolute left-[56%] top-[40%] h-1 w-[18%] bg-white/26" />
        <div className="absolute left-[28%] top-[12%] h-[62%] w-1 bg-white/26" />
        <div className="absolute left-[72%] top-[12%] h-[58%] w-1 bg-white/20" />
        <div className="absolute bottom-[12%] left-[42%] h-16 w-16 rounded-full bg-[#d5e6ef]/75" />
        <div className="absolute bottom-[24%] left-[49%] h-[16%] w-1 bg-white/40" />
      </div>
    );
  }

  if (variant === "editor-routine") {
    return (
      <div className={`${shellClass} ${className}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_18%,#f6dfcc_0%,#d4b49a_26%,#8f755f_62%,#55463a_100%)]" />
        <div className="absolute right-[14%] top-[20%] h-[60%] w-[42%] rounded-[48%_48%_44%_44%] bg-[radial-gradient(circle_at_52%_28%,rgba(255,232,214,0.98),rgba(236,205,181,0.95)_30%,rgba(198,162,136,0.9)_58%,rgba(122,93,76,0.86)_100%)]" />
        <div className="absolute right-[10%] top-[18%] h-[64%] w-[46%] rounded-full border border-white/70" />
        <div className="absolute right-[20%] top-[40%] h-8 w-8 rounded-full bg-white/85" />
        <div className="absolute right-[0%] bottom-[12%] h-[56%] w-[44%] rounded-[2rem_0_0_0] bg-white/18" />
      </div>
    );
  }

  return (
    <div className={`${shellClass} ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_15%,rgba(86,132,255,0.22),transparent_30%),linear-gradient(180deg,#0f2736_0%,#0a1821_100%)]" />
      <div className="absolute inset-x-0 bottom-16 h-px bg-[linear-gradient(90deg,transparent,rgba(104,205,255,0.55),transparent)]" />
      <div className="absolute bottom-16 left-10 h-48 w-6 rounded-full border border-[#7bd3ff]/30 bg-[linear-gradient(180deg,rgba(145,221,255,0.4),rgba(27,59,87,0.15))]" />
      <div className="absolute bottom-16 left-24 h-56 w-8 rounded-[1rem] border border-[#7cd4ff]/30 bg-[linear-gradient(180deg,rgba(148,225,255,0.3),rgba(24,51,78,0.12))]" />
      <div className="absolute bottom-16 left-40 h-40 w-14 rounded-[1.2rem_1.2rem_2rem_2rem] border border-[#8cdcff]/30 bg-[linear-gradient(180deg,rgba(155,230,255,0.32),rgba(21,47,74,0.12))]" />
      <div className="absolute bottom-16 left-[15.5rem] h-24 w-10 rounded-full border border-[#8cdcff]/30 bg-[linear-gradient(180deg,rgba(146,224,255,0.28),rgba(21,47,74,0.12))]" />
      <div className="absolute bottom-16 right-32 h-60 w-9 rounded-[1rem] border border-[#8fdfff]/30 bg-[linear-gradient(180deg,rgba(160,235,255,0.3),rgba(24,50,78,0.12))]" />
      <div className="absolute bottom-16 right-20 h-36 w-14 rounded-[1.2rem_1.2rem_2rem_2rem] border border-[#8fdfff]/30 bg-[linear-gradient(180deg,rgba(160,235,255,0.26),rgba(22,46,72,0.1))]" />
      <div className="absolute right-4 top-4 h-28 w-28 rounded-full bg-primary/10 blur-2xl" />
    </div>
  );
}
