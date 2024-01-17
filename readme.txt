favicon
    사이즈 : 16px*16px  


<웹프로젝트 시작할 때>
    1) 언어설정
        lang = ko
    2) Title 수정 (+ favicon넣기)
        어떤 홈페이지인지 설정
    3)  CSS 초기화
        reset.css 추가
    4) 오픈그래프 open graph
        : 웹 페이지가 소셜미디어(페이스북, 카톡 등)으로 공유될 때, 우선적으로 활용할 정보
        실제서버에 올려야 볼 수 있음

        <meta
            property = "og : type"
            content = "web site"
        >
        <meta
            property = "og : site_name"
            content = "starbucks"
        >
        <meta 
            property = "og : title" content="Starbucks Coffee Korea"
        >
        <meta property = "og : description" content="Starbucks Coffee Korea에 오신 걸 환영합니다.">
    <meta property = "og : images" content="images\starbucks_seo.jpg">
    <meta property = "og : url" 
    content="https://www.starbucks.co.kr/index.do">



    localhost:5500/index.html
    127.0.0.1:5500/index.html
    index.html이 가장 기본이 되는 페이지 
    최상단 경로에 있는 파일을 불러온다 = index.html을 불러온다 = /



230830
가상클래스
반복적으로 사용되는 기호
사용 방법
    태그명 :: before {}
    태그명 :: after {}

    
이미지로 쓸 때
    태그명 :: before { content : " ";}
    태그명 :: after {}


box-sizing
    패딩이 들어가면 사이즈가 커짐
        content-box
        border-box
            보더 안 쪽으로 패딩이 들어감

가상클래스 input:focus


드롭메뉴


가로로 메뉴 만드려면 플렉스


<ul class ="1depth">
    <li>coffee
        <ul class ="2depth">
            <li> 커피 
                <ul class ="3depth">
                    <li>원두</li>
                    <Li>비아<//li>
            </li>
            
        </ul>