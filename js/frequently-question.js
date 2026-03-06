const frequentlyQuestion = [
  {
    type: "shipping",
    question: [
      {
        id: "faq1",
        question: "Do you offer international shipping?",
        answer:
          "Items can be returned within 14 days of receipt, provided they are unworn, unwashed, and in original condition with tags attached.",
      },
      {
        id: "faq2",
        question: "How long does delivery take?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare, nisl non rhoncus commodo.",
      },
      {
        id: "faq3",
        question: "How can I track my order?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare, nisl non rhoncus commodo.",
      },
    ],
  },
  {
    type: "return-exchange",
    question: [
      {
        id: "faq4",
        question: "What is your return policy?",
        answer:
          "Items can be returned within 14 days of receipt, provided they are unworn, unwashed, and in original condition with tags attached.",
      },
      {
        id: "faq5",
        question: "Can I exchange for a different size?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare, nisl non rhoncus commodo.",
      },
      {
        id: "faq6",
        question: "Are sale items refundable?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare, nisl non rhoncus commodo.",
      },
    ],
  },
];

function renderFAQ(type) {
  const data = frequentlyQuestion.find((item) => item.type === type);
  if (!data) return;

  const container = document.querySelector(".frequently-question-container");

  container.innerHTML = data.question
    .map(
      (item) => `
          <div class="accordion" id="faqAccordion">
            <div class="accordion-item">
              <div class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#${item.id}"
                  aria-expanded="false"
                  aria-controls="${item.id}"
                >
                  ${item.question.toUpperCase()}
                </button>
              </div>
              <div
                id="${item.id}"
                class="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div class="accordion-body">${item.answer}</div>
              </div>
            </div>
          </div>
        `,
    )
    .join("");

  document.querySelectorAll(".btn-row button").forEach((btn) => {
    btn.classList.remove("active-btn");
  });

  const activeBtn = document.querySelector(
    `.btn-row button[data-type="${type}"]`,
  );
  if (activeBtn) {
    activeBtn.classList.add("active-btn");
  }
}

renderFAQ("return-exchange");
