const imgSrc = 'img/history-image.png'
const description = 'Lorem ipsum dolor consectetur adipisicing elit. Dolores odio voluptates quae veritatis a nihil molestiae quibusdam voluptatibus, eveniet recusandae mollitia maiores incidunt ipsum in aperiam. A cum fugiat corporis ratione dicta fugit, laborum harum, minima obcaecati quod facilis? Sint eius similique exercitationem tempora inventore libero possimus, veritatis reiciendis!'
const title = 'History'
const btnLabel = 'more history'

export let historySection = `
<section id="history-arc">
  <div class="container">
    <div class="img-box">
      <h1 id="title-mobile">${title}</h1> 
      <img src="${imgSrc}" alt="" />
    </div>
    <div class="headings">
      <h1>${title}</h1>
      <p>${description}</p>
      <a href="#exhibition-arc">${btnLabel}</a>
    </div>
  </>
</section>`