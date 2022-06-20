<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/responsive.css">
    <link rel="stylesheet" href="../css/keyframes.css">
    <link rel="stylessheet" href="../css/fonts.css">
    <link rel="shortcut icon" type="image/x-icon" href="../images/logo/favicon.ico">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
    <script defer src="../js/controllers.js"></script>
    <script defer src="../js/main.js"></script>
    <title>...: Ideal Securitizadora :...</title>
</head>
<body>   
    <div id="flexbox_container">
        <?php include('../includes/header.php'); ?>

        <section id="about_sec_first_container">
            <article>
                <h2>A EMPRESA <span>IDEAL</span><br> ESTÁ AQUI PARA VOCÊ</h2>
            </article>
            <div>
                <picture></picture>
            </div>
        </section>

        <section id="about_sec_second_container">
            <h1 class="hidden_element">COMO FUNCIONA?</h1>
            <article class="about_sec_second_text hidden_element">
                <!-- <h3>Equipe Ideal</h3> -->
                <code>“Chegou a hora de tirar aquele projeto da gaveta ou aquele plano do papel!
                        Se você tem projetos para a sua empresa mas não tem capital para realizá-los, conte com a Ideal Securitizadora, nós
                        te ajudamos a acessar o capital necessário!
                        Com a antecipação de recebíveis você trabalha com um dinheiro que já é seu, sem prestação mensal e com taxas
                        mais baixas do que empréstimos bancários.
                        O capital Ideal para tirar seus sonhos do papel está na Ideal Securitizadora!“.
                </code>
            </article>
            <div class="video_box_second hidden_element">
                <video poster="../images/thumbVideo.png">
                    <source src="../videos/SECURITIZADORA_HD.mp4" type="video/mp4">
                </video>
                <menu class="hidden_menu">
                    <ul>
                        <li><i class="bi bi-play"></i></li>
                        <li><i>00:00</i> <i>/</i> <i>00:00</i></li>
                    </ul>
                    <ul>
                        <li><i class="bi bi-volume-down"></i></li>
                        <li><input type="range" name="volumeRange" min="0" max="100" id="volumeRange"></li>
                        <li><i class="bi bi-fullscreen"></i></li>
                    </ul>
                </menu>
            </div>

            <h2 class="hidden_element">SEGUE O EXEMPLO <span>ABAIXO</span></h2>
        </section>

        <section id="about_sec_thirty_container">
            <picture>
                <figure></figure>
            </picture>

            <div class="hidden_element">
                <h4>PROCESSO DA SECURITIZAÇÃO</h4>
                <section id="map_container">
                    <picture class="map_securitizadora">
                        <ul>
                            <li></li>  <!-- CLIENTE -->
                            <article>
                                <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi nihil distinctio quisquam vitae ipsa maiores corrupti aliquid magnam hic mollitia repudiandae, nam explicabo autem voluptate aspernatur iure veritatis laborum ipsum."</p>
                            </article>

                            <li></li> <!-- CONTAS -->
                            <article>
                                <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi nihil distinctio quisquam vitae ipsa maiores corrupti aliquid magnam hic mollitia repudiandae, nam explicabo autem voluptate aspernatur iure veritatis laborum ipsum."</p>
                            </article>

                            <li></li> <!-- TITULOS -->
                            <article>
                                <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi nihil distinctio quisquam vitae ipsa maiores corrupti aliquid magnam hic mollitia repudiandae, nam explicabo autem voluptate aspernatur iure veritatis laborum ipsumaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"</p>
                            </article>

                            <li></li> <!-- INVESTIDOR -->
                            <article>
                                <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi nihil distinctio quisquam vitae ipsa maiores corrupti aliquid magnam hic mollitia repudiandae, nam explicabo autem voluptate aspernatur iure veritatis laborum ipsumasdaasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasda"</p>
                            </article>
                        </ul>
                    </picture>
                </section>                
            </div>
        </section>

        <section class="fullscreen_window_hidden"></section>
        <?php include('../includes/footer.php'); ?>
    </div>
</body>
</html>