<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <title>Lynn Al Agilly - Home</title>
    <?php include 'include/css.php'?>
  </head>
  <body>
    <?php include 'include/navbar.php'?>
    <!-- Header -->
    <?php include 'include/header.php'?>
    <div class="container-fluid main-content">
      <!-- About -->
      <?php include 'include/about.php'?>
      <!-- School -->
      <?php include 'include/education.php'?>
      <!-- Work -->
      <?php include 'include/experience.php'?>
      <!-- Projects -->
      <?php include 'include/projects.php'?>
      <!-- Contact -->
      <?php include 'include/contact.php'?>
      <!-- Footer -->
      <?php include 'include/footer.php'?>
    </div>
    <script type="text/javascript">
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

      function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
        else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
      }

      toggleSwitch.addEventListener('change', switchTheme, false);
    </script>
    <?php include 'include/javascript.php'?>
  </body>
</html>
