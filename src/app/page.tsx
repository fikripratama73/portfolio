import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DATA } from '@/data/resume';
import { BlurFade } from '@/components/magicui/blur-fade';
import { ResumeCard } from '@/components/resume-card';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { IconCloud } from '@/components/magicui/icon-cloud';

const BLUR_FADE_DELAY = 0.04;
const images = DATA.skills.map((slug) => `https://cdn.simpleicons.org/${slug.replace(/\s+/g, '').toLowerCase()}/${slug.replace(/\s+/g, '').toLowerCase()}`);

export default function Home() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFade delay={BLUR_FADE_DELAY}>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">{`Hi, I'm ${DATA.name.split(' ')[0]} 👋`}</h1>
                <p className="max-w-[600px] md:text-xl">{DATA.description}</p>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-30 border">
                <AvatarImage src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <p className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">{DATA.summary}</p>
        </BlurFade>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade key={education.school} delay={BLUR_FADE_DELAY * 5 + id}>
              <ResumeCard key={education.school} logoUrl={education.logoUrl} href={education.href} altText={education.school} title={education.school} subtitle={education.degree} period={`${education.start} - ${education.end}`} />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <div className="flex flex-wrap gap-2">
              {DATA.skills.map((skill, id) => (
                <Badge key={id} variant="default" className="flex items-center gap-1 cursor-default text-sm px-2 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
            <div className="relative flex size-full items-center justify-center overflow-hidden">
              <IconCloud images={images} />
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">Contact</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a dm{' '}
                <Link href={DATA.contact.social.X.url} className="text-blue-500 hover:underline">
                  with a direct question on twitter
                </Link>{' '}
                and I&apos;ll respond whenever I can. I will ignore all soliciting.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
