import { StudentShell } from "@/components/student/StudentShell";
import { videoCenter } from "@/content/platform";

export default function VideosPage() {
  return (
    <StudentShell title="Centro de videos privados">
      <div className="space-y-6">
        {videoCenter.map((module) => (
          <article key={module.module} className="rounded-3xl border border-gold/20 bg-black/35 p-6">
            <h2 className="font-display text-2xl text-gold">{module.module}</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {module.chapters.map((chapter) => (
                <div key={chapter.title} className="rounded-2xl border border-gold/10 bg-charcoal p-5">
                  <p className="font-semibold text-cream">{chapter.title}</p>
                  {chapter.videos.map((video) => (
                    <div key={video.qrCode} className="mt-4 rounded-xl bg-black/40 p-4 text-sm text-cream/70">
                      <p className="text-gold">{video.title}</p>
                      <p>Video privado: {video.privateUrl}</p>
                      <p>QR preparado: /qr/{video.qrCode}</p>
                      <p>Boly™ contextual: {video.bolyPrompt}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </StudentShell>
  );
}
