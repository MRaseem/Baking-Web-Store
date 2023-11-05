<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bake Me Happy</title>
    <link rel="shortcut icon" type="image" href="./image/logo.jpg">
    <link rel="stylesheet" href="./css/style.css">
    <!-- bootstrap links -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <!-- bootstrap links -->
    <!-- fonts links -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Uchen&display=swap" rel="stylesheet">
    <!-- fonts links -->
    <!-- icons links -->
    <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'>
    <!-- icons links -->
    <!-- animation links -->
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <!-- animation links -->
    <script>

    </script>
</head>
<body>
    <div class="all-content">
        <!-- navbar -->
        <nav class="navbar navbar-expand-md" id="navbar">
            <!-- Brand -->
            <a class="navbar-brand" href="#" id="logo"><img src="./image/logo.jpg" alt="" width="40px">  Bake Me Happy</a>
          
            <!-- Toggler/collapsibe Button -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
              <span><img src="./image/menu.png" alt="" width="30px"></span>
            </button>
          
            <!-- Navbar links -->
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="index.php">Home</a>
                </li>
                <!-- dropdown -->
                <li class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">
                     Category
                    </a>
                    <div class="dropdown-menu">
                        <a href="index.php#brownies" class="dropdown-item">Brownies</a>
                        <a href="index.php#cookies" class="dropdown-item">Cookies</a>
                    </div>
                </li>
                <!-- dropdown -->
                <li class="nav-item">
                  <a class="nav-link" href="gallary.html">Gallary</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="about.php">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link-active" href="contact.php">Contact</a>
                </li>
              </ul>
            </div>
            <div class="icons">
                <img src="./image/user.png" alt="" width="20px">
                <img src="./image/heart.png" alt="" width="20px">
                <img src="./image/add.png" alt="" width="24px">
            </div>
          </nav>
        <!-- navbar end -->
      <!-- contact  -->
      <div class="container" id="contact"    data-aos="fade-up"
      data-aos-duration="1500">
        <h1>CONTACT US</h1>
        <div class="row">
            <div class="col-md-4 py-1 py-md-0">
                <div class="form-group">
                    <input type="text" class="form-control" id="usr" placeholder="Name">
                </div>
            </div>
            <div class="col-md-4 py-1 py-md-0">
                <div class="form-group">
                    <input type="email" class="form-control" id="eml" placeholder="Email">
                </div>
            </div>
            <div class="col-md-4 py-1 py-md-0">
                <div class="form-group">
                    <input type="number" class="form-control" id="phn" placeholder="Phone">
                </div>
            </div>
            
        </div>
        <div class="form-group">
            <textarea class="form-control" rows="5" id="comment" placeholder="Message"></textarea>
        </div>
        <div id="messagebtn"><button>Send Message</button></div>
      </div>
      <!-- contact end -->
      <!-- footer -->
      <footer id="footer"    data-aos="fade-up"
      data-aos-duration="1500">
        <h1 class="text-center">Bake Me Happy</h1>
        <p class="text-center">Dentist By Profession Baker by Passion</p>
        <div class="icons text-center">
            <i class="bx bxl-instagram" onClick="parent.open('https://www.instagram.com/bakemehappy.uae/')" ></i>
        </div>
        <div class="copyright text-center">
            &copy; Copyright <strong>Bake Me Happy</strong> .All Rights Reserved
        </div>
        <div class="credite text-center">
            Designed By <a href="#"><span>Mohammed Raseem</span></a>
        </div>
      </footer>
      <!-- footer -->
      <a href="#" class="arrow"><i><img src="./image/up-arrow.png" alt="" width="50px"></i></a>
    </div>
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script>
        AOS.init();
      </script>
</body>
</html>