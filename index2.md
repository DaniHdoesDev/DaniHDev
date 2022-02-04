<html>

<head>
    <title>Dannala Hoskins' Resume Page</title>
    <link rel="stylesheet" href="site.css"/>
</head>

<body>  
<div class="container">
    <header>
        <img id="headshot" src="LinkedIn Photo.jpg" alt="Dannala Hoskins" 
            width="150"
            height="150" />
        <h1 id="siteName">Dannala O. Hoskins</h1>
    
        <ul id="menu">
         <li class="active"><a href="index2.html">Home</a></li>
         <li><a href="about.html">About</a></li>
         <li><a href="privacy.html">Privacy</a></li>
        </ul>
   
    
    </header>
 <main>
     <p><strong>Purpose:</strong>This is a resume (or CV) to help me get a job in web development.</p>

     <h2> Experience</h2>
     <div class="experience">
         <p class="title">First Job</p>
         <p>Hello</p>
     </div>

     <div class="experience">
        <p class="title">Second Job</p>
        <p>DEF</p>
     </div>

     <div class="experience">
         <p class="title">Third Job</p>
         <p>GHI</p>
     </div>
 </main>
 <aside>
        <h2>Contact Me</h2>
        <form id="contactform">
            <div id="formInfo"></div>
            <div>
                <label for="fullName"><strong>Full Name</strong></label>
            </div>
            <div>
                <input id="fullName" type="text" />
            </div>
            <div>
                <label for="email"><strong>Email</strong></label>
            </div>  
            <div>
             <input id="email" type="email"/>
            </div>
            <div>
                <label for="subject"><strong>Subject</strong></label>
            </div>  
            <div>
                <select id="subject">
                    <option>Job Offer</option>
                    <option>Personal Message</option>
                    <option>Complaint</option>
                </select>
            <div>
                <label for="msg"><strong>Message</strong></label>
            </div>
            <div>
            <textarea id ="msg"rows="4"></textarea>
            </div>
            <div>
                <input type="submit" value="Send Mail"/> 
            </div>
        </form>
</aside>

     <footer>
        <div>
            &copy; 2022 Copyright - Dannala Hoskins;
        </div>
     </footer>
    </div>
    <script src="index.js" ></script>
</body>

</html>