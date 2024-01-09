const cardEl = document.getElementById("cards");
export const createEachTable = (data) => {
  let html = "";
  data.forEach((item) => {
    html += `
      <div class="w-[358px] h-[228px] rounded-[6px] bg-gray-100 mt-[65px] pl-[33px]">
   <img class= "translate-y-[-25px] "
    src=${item.logo} />
   <div class="flex ml-auto mr-auto ">
   <span class="text-[#6E8098]">${item.postedAt}</span>
   <p class="translate-x-5 text-[#6E8098]">${item.contract}</p>
   </div>
    <a href="./Scoot.html"> <h1 class="text-[#19202D] text-[20px] font-bold cursor-pointer hover:text-[#6E8098]">${item.position}</h1></a>
   <p class="pt-[17px] mb-[44px] text-[#6E8098]">${item.company}</p>
   <span class="text-[#5964E0] text-[14px] font-bold cursor-pointer">${item.location}</span>
   </div>
   </div>
   `;
  });
  cardEl.innerHTML = html;
};
