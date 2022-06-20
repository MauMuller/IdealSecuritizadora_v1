<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/responsive.css">
    <link rel="stylesheet" href="../css/keyframes.css">
    <link rel="shortcut icon" type="image/x-icon" href="../images/logo/favicon.ico">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
    <script defer src="../js/controllers.js"></script>
    <script defer src="../js/main.js"></script>
    <title>...: Ideal Securitizadora :...</title>
</head>
<body>   
    <div id="flexbox_container">
        <?php include('../includes/header.php'); ?>

        <section id="contact_container">
            <menu>
                <div>
                    <h1 class="outdoor">Localização</h1>
                </div>
                <div>
                    <aside class="details_contact">
                        <span class="text_location_contact">
                            <h2>Santa Cruz do Sul</h2>
                            <h4>Rua 28 de Setembro, nº 553 - Centro</h4>   
                            <p>
                                <a href="tel:555184448112">(51) 8444-8112</a>
                                |
                                <a href="mailto:contato@idealsecuritizadora.com">contato@idealsecuritizadora.com</a>
                            </p>
                        </span>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3465.1437617195666!2d-52.43266808489271!3d-29.715594682003132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951ca34154fbab01%3A0xd97f714b6a593c6b!2sRua%2028%20de%20Setembro%2C%20553%20-%20Centro%2C%20Santa%20Cruz%20do%20Sul%20-%20RS%2C%2096810-174!5e0!3m2!1spt-BR!2sbr!4v1649181636725!5m2!1spt-BR!2sbr" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </aside>
                    <aside class="details_contact">
                        <span class="text_location_contact">
                            <h2>Lajeado</h2>
                            <h4>Av Benjamin Constant, nº 1126 sala 807 - Centro</h4>
                            <p>
                                <a href="tel:5551984344050">(51) 98434-4050</a>
                                |
                                <a href="mailto:michele@idealsecuritizadora.com">michele@idealsecuritizadora.com</a>
                            </p>
                        </span>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3473.8868915967137!2d-51.97025098470201!3d-29.461313011359277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951c6164b7de64d7%3A0x43e82ee6169f92b3!2sAv.%20Benjamin%20Constant%2C%201126%20-%20807%20-%20Centro%2C%20Lajeado%20-%20RS%2C%2095900-000!5e0!3m2!1spt-BR!2sbr!4v1653067692990!5m2!1spt-BR!2sbr" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </aside>
                </div>
            </menu>
            <menu>
                <div>
                    <h1 class="outdoor">Formulário de Contato</h1>
                </div>
                <form action="">
                    <div>
                        <i class="bi bi-person"></i>
                        <input type="text" placeholder="Nome">
                        <i></i>
                    </div>
                    <div>
                        <i class="bi bi-telephone"></i> 
                        <input type="text" placeholder="Fone">
                        <i></i>
                    </div>
                    <div>
                    <i class="bi bi-envelope"></i>
                        <input type="text" placeholder="Email">
                        <i></i>
                    </div>
                    <div>
                        <i class="bi bi-building"></i>                        
                        <input type="text" placeholder="CNPJ">
                        <i></i>
                    </div>
                    <div>
                        <i class="bi bi-cash-stack"></i> 
                        <input type="text" placeholder="Faturamento Anual">
                        <i></i>
                        <article class="hidden_tip"> 
                            <h3>Por favor. não utilize pontução e não arredonde o valor informado!</h3>
                        </article>  
                    </div>
                    <span class="error_inputs wrong_text"></span>
                    <div>
                        <picture class="recapcha_container_contact">
                            <menu>
                                <aside>
                                    <div></div>
                                    <h2>Não sou um robô!</h2>
                                </aside>
                                <img src="../images/recapcha.png" alt="Recapcha Formulário">
                            </menu>                            
                            <section class="recapcha_questions_hidden">
                                <h2>Selecione o número <span>0</span> das figuras!</h2>
                                <ul>
                                    <li>0</li>
                                    <li>0</li>
                                    <li>0</li>
                                    <li>0</li>
                                    <li>0</li>
                                    <li>0</li>
                                </ul>
                                <ul>
                                    <li>Validar</li>
                                </ul>
                            </section> 
                        </picture>
                    </div>
                    <div>
                        <input type="button" class="wrong_button" placeholder="FONE" value="Enviar" disabled>
                    </div>
                </form>
            </menu>
        </section>

        <section class="fullscreen_window_hidden"></section>
        <?php include('../includes/footer.php'); ?>
    </div>
</body>
</html>