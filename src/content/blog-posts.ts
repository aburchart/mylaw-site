export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | {
      type: "paragraph";
      text: string;
      link: { label: string; href: string };
      after?: string;
    };

export type BlogPost = {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  author: string;
  publishedAt: string;
  content: BlogBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    title: "Building a Compliance Assistant That Shows Its Working",
    slug: "building-a-compliance-assistant-that-shows-its-working",
    excerpt:
      "An assistant that answers only from documents you have loaded, cites the exact section behind every point, and says plainly when it cannot answer.",
    category: "Compliance",
    author: "MyLaw Solutions",
    publishedAt: "2026-10-20",
    content: [
      {
        type: "paragraph",
        text: "Providers of disability and ageing services answer compliance questions all day. A support worker wants to know whether a particular restraint needs consent. A manager is unsure which incidents must be reported and by when. A coordinator wonders whether the service's own policy actually matches the latest rules. The answers exist, but they are spread across legislation, regulator guidance and internal policies, and finding the right paragraph under time pressure is hard.",
      },
      {
        type: "paragraph",
        text: "General-purpose AI chatbots are not the answer. They write fluent, confident text whether or not it is correct, and in a regulated setting a confident wrong answer is worse than no answer. So we set out to build something different: an assistant that answers only from documents you have loaded, cites the exact section behind every point, and says plainly when it cannot answer.",
      },
      {
        type: "paragraph",
        text: "This post describes the pilot we have built, the design choices behind it, and what we have learned so far.",
      },
      { type: "heading", text: "What the assistant does" },
      {
        type: "paragraph",
        text: "Staff type a question in plain language and receive a structured answer in five parts: a short answer, the legal position, regulator guidance, the organisation's own policy position, and a confidence and caveats note. Each point carries a tag naming the document and section it came from, so the reader can check it against the source.",
      },
      {
        type: "paragraph",
        text: "Separating those layers matters. Legislation, regulator guidance and an internal policy carry different weight, and a reader needs to know which one is speaking.",
      },
      {
        type: "paragraph",
        text: "When the documents do not answer the question, the assistant says so. In testing, we asked it what to do when someone falls down stairs. It did not improvise first aid. It reported that the loaded legislation does not address the question directly, pointed to how the regulator defines and reports falls that cause major injury, and noted that the guidance gives no emergency steps. Every page also carries a clear notice to call 000 in an emergency, because this tool gives compliance guidance, not clinical advice.",
      },
      { type: "heading", text: "How it works, in plain English" },
      {
        type: "paragraph",
        text: "The assistant uses an approach often called retrieval-augmented generation. Instead of relying on what an AI model remembers, it first searches your own documents for the passages most relevant to the question, then asks the model to write an answer using only those passages. The model is instructed to cite what it uses and to flag gaps.",
      },
      { type: "heading", text: "Learning from real use" },
      {
        type: "paragraph",
        text: "A pilot is only useful if you can see how it is performing. Questions, answers and ratings feed a reporting database, and a Power BI dashboard, embedded as a tab inside the app, shows:",
      },
      {
        type: "list",
        items: [
          "how many questions are being asked and how quickly they are answered",
          "the estimated cost per question",
          "how often the search found nothing relevant",
          "how often answers are rated helpful, and a list of the answers that were not, so that an administrative user can see exactly what to fix",
        ],
      },
      { type: "heading", text: "Handling sensitive information carefully" },
      {
        type: "paragraph",
        text: "Questions typed into a compliance tool can contain sensitive details, so we treat the log as sensitive data. The page warns users not to enter patient names or identifying details. Before anything is copied into the reporting database, we also strip out obvious identifiers such as email addresses and long numbers like phone and Medicare numbers. We are candid that this is a safety net, not a guarantee. It cannot recognise names, which is why the warning, access controls and retention rules matter as much as the software.",
      },
      { type: "heading", text: "What we learned" },
      {
        type: "list",
        items: [
          "Grounding and citations beat clever prompting. The biggest gains in trustworthiness came from forcing every statement back to a source, not from tweaking wording.",
          'Teach it to say "the documents don\'t cover that". An honest gap is more useful than a plausible guess, and testers noticed and valued it.',
          "Build the feedback loop on day one. Ratings and a review queue turned testing from anecdote into evidence.",
          "Details build trust. Early on, a tester pressed the save-comment button twice because nothing visibly happened. We added pressed states, progress indicators and clear confirmations. In a tool people are asked to rely on, small interface signals matter.",
          "Plan for governance early by identifying compliance gap.",
        ],
      },
      { type: "heading", text: "What comes next" },
      {
        type: "paragraph",
        text: "This is a pilot, and it is not legal advice. It has been tested with legal oversight, and every answer tells users to have a qualified person confirm it before it is relied on for a care decision. Coverage depends entirely on the documents loaded, so it is only as complete as its sources.",
      },
      {
        type: "paragraph",
        text: "Our roadmap includes Microsoft Entra single sign-on for production use, separate deployments for each organisation so that one provider's policies never mix with another's, wider legislative coverage including state and territory law, and defined retention rules for the question log.",
      },
      {
        type: "paragraph",
        text: "If you would like to see a demonstration, or explore a pilot using your own policies and procedures,",
        link: { label: "get in touch with MyLaw Solutions", href: "/contact" },
        after: ".",
      },
    ],
  },
];

export function getPublishedPosts() {
  return [...blogPosts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug) ?? null;
}
