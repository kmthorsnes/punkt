const mockCommitResponse = {
  all: [
    {
      hash: "d42ed51b40c230519f5f083c74cf87d5af4d478d",
      date: "2023-03-14T09:45:06+01:00",
      message: "feat(all): #333 En veldig stor feature",
      refs: "",
      body:
        "En ny og shiny feature du kan lese mer om på [nett](https://punkt.oslo.kommune.no)\n" +
        "\n",
      author_name: "Ole Aasen",
      author_email: "mr.oleaasen@gmail.com",
    },
  ],
  latest: {
    hash: "e1c2577df5324d1ada435fb2ca44ae6d9fb84fab",
    date: "2023-03-16T19:26:24+01:00",
    message: "feat(all): #333 En veldig stor feature",
    refs: "HEAD -> auto-test-changelog, origin/auto-test-changelog",
    body:
      "En ny og shiny feature du kan lese mer om på [nett](https://punkt.oslo.kommune.no)\n" +
      "\n",
    author_name: "Ole Aasen",
    author_email: "mr.oleaasen@gmail.com",
  },
  total: 4,
};

export { mockCommitResponse };
