const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.querySelector(".accordian_body");
const faqs = [];

function showFaq(idx) {
  document.querySelectorAll(".faq p")[idx].classList.toggle("hidden");
  if(document.querySelectorAll(".faq p")[idx].classList.contains("hidden")){
    document.querySelectorAll(".show_btn")[idx].innerHTML = "+";
  }else{
    document.querySelectorAll(".show_btn")[idx].innerHTML = "-";
  }
}

function createFaq() {
  const element = document.createElement("div"); //main div
  const header = document.createElement("div");
  const title = document.createElement("h3"); //title
  const ans = document.createElement("p");
  const btn = document.createElement("div"); //btn

  element.setAttribute("class", "faq");
  header.setAttribute("class", "faq_header");
  ans.setAttribute("class", "hidden");
  btn.setAttribute("class", "show_btn");
  btn.style.display = "flex";
  btn.style.justifyContent = "center";
  btn.style.alignItems = "center";

  let returningElements = {element, header, title, ans, btn};

  return returningElements;
}

faqData.forEach(i=>{
  const faqDetails = createFaq();
  faqDetails.title.innerHTML = i.question;
  faqDetails.ans.innerHTML = i.answer;
  faqDetails.element.setAttribute("id", i.id);
  faqDetails.btn.innerText = "+"


  accordianBody.append(faqDetails.element);

  faqDetails.element.append(faqDetails.header);
  faqDetails.header.append(faqDetails.title);
  faqDetails.header.append(faqDetails.btn);
  faqDetails.element.append(faqDetails.ans);

 
})




function btnStatusUpdate() {
  const button = document.querySelectorAll(".show_btn");
  for(let i=0; i<button.length; i++){
    button[i].addEventListener("click", ()=>{
      showFaq(i);
      
    })
  }
  
}
btnStatusUpdate();


