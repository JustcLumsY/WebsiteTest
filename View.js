//  html = `
//    <header id="pageHeader">Header</header>
//    <article id="mainArticle">Article</article>
//    <nav id="mainNav">Nav</nav>
//    <div id="siteAds">Ads</div>
//   <footer id="pageFooter">Footer</footer>

//    `;

//    updateView();

//    function updateview() {
//      page.innerHTML = html;
//    }


show();
function show() {
    document.getElementById('mainPage').innerHTML = `

        <header id="pageHeader" >Header</header>
        <article id="mainArticle">Article</article>

        <nav id="mainNav">
        <span style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776; Menu</span>
        <div id="mySidenav" class="sidenav">
            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
            <a href="#">Home</a>
            <a href="#">Account</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
      </div></nav>


        <div id="siteSale">Sale</div>

        <footer id="pageFooter">Footer</footer>
        
    `;
}