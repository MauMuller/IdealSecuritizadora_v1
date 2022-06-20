<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/responsive.css">
    <link rel="stylesheet" href="css/keyframes.css">
    <link rel="stylessheet" href="../css/fonts.css">
    <link rel="shortcut icon" type="image/x-icon" href="images/logo/favicon.ico">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
    <script defer src="js/controllers.js"></script>
    <script defer src="js/main.js"></script>
    <title>...: Ideal Securitizadora :...</title>
</head>
<body>   
    <div id="flexbox_container">
        <?php include('includes/header.php'); ?>

        <main id="body_container">
            
            <section id="section_container_first">
                <div id="box_center">
                    <article class="article_box">
                        <h1>Capital de giro com agilidade</h1>
                        <p>Junte-se a nós com a Ideal Securitizadora e veja os frutos da nossa parceria! &#9994 </p>
                        <div class="link_article">
                            <a href="./pages/institucional.php">Ideal Securitizadora</a>
                        </div>
                    </article>
                    
                    <div class="form_box">
                        <form class="form_principal hidden_element" action="">
                            <menu>
                                <h2>Informe seus dados e<br>
                                <span>abra sua conta!</span></h2>
                            </menu>

                            <aside>
                                <div>
                                    <input type="text" for="name_form_box" id="input_name" placeholder="Nome Completo" required>
                                    <i></i>
                                </div>
                                <div>
                                    <input type="text" for="phone_form_box" id="input_phone" placeholder="Fone" required>
                                    <i></i>
                                </div>
                                <div>
                                    <input type="email" for="email_form_box" id="input_email" placeholder="Email" required>
                                    <i></i>
                                </div>
                                <div>
                                    <input type="text" for="cnpj_form_box" id="input_cnpj" placeholder="CNPJ" required>
                                    <i></i>
                                </div>
                                <div>
                                    <input type="text" for="fatura_form_box" id="input_money" placeholder="Faturamento Anual" required>
                                    <i></i>
                                    <article class="hidden_tip"> 
                                        <h3>Siga as instruções:</h3>
                                        <p>
                                            - Não insira pontuação;<br>
                                            - Arredonde o número.
                                        </p>
                                    </article>        
                                </div>
                                <span class="error_inputs wrong_text"></span>
                                <div>
                                   <picture>
                                       <menu>
                                            <div id="button_recapcha" class="button_recapcha_default"></div>
                                            <h1>Não sou um robô!</h1>
                                            <img src="images/recapcha.png" alt="reCAPTCHA" loading="freeze">
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
                                    <input type="button" for="button_form_box" class="wrong_button" value="Enviar" disabled>
                                </div>
                            </aside>
                        </form>
                    </div>
                </div>
                <div id="box_footer">
                    <article class="icons_more">
                        <h1>Veja Mais</h1>
                        <i class="bi bi-chevron-double-down"></i>
                    </article>
                </div>
            </section>

            <section id="section_container_second">
                <header id="box_header_second">
                    <div id="box_header_second_left">
                        <article class="article_box_second">
                            <h1>O que é Securitização?</h1>
                            <p>A Securitizadora é uma empresa que compra os recebíveis de outra empresa, ela antecipa o valor que a empresa ia
                            receber daqui a alguns meses para que essa empresa tenho o capital na hora em que precisa, assim, quando a dívida
                            é quitada, quem recebe o valor é a securitizadora.  
                            <br><br>
                            A antecipação de recebíveis é uma operação que adianta um dinheiro que já é seu, mas que está
                            programado para que você receba em um momento futuro. Você não paga juros e não fica devendo a
                            terceiros, mas paga uma taxa de operação pelo serviço. Para realizar essa operação o empreendedor precisa
                            ter títulos, cheques ou duplicatas para negociar.
                            </p>

                            <div class="video_box_second">
                                <video poster="./images/thumbVideo.png">
                                    <source src="videos/SECURITIZADORA_HD.mp4" type="video/mp4">
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
                        </article>
                    </div>
                </header>

                <main id="box_body_second">
                    <h1>VANTAGENS/AVALIAÇÕES</h1>
                    <div id="box_body_second_container" class="hidden_class_second">
                        <div class="box_body_second_left">
                            <ul>
                                <li>
                                    <i class="bi bi-clock"></i>
                                    <article>
                                    Quando uma empresa, que vende a prazo, tem valores a receber mas não pode esperar o cliente pagar pois precisa
                                    do capital para um novo projeto, é aí que a Securitizadora entra em jogo.                                     
                                    </article>
                                </li>
                                <li>
                                    <i class="bi bi-bar-chart-line"></i>
                                    <article>
                                    O serviço de antecipação de recebíveis é uma linha de crédito segura e eficiente para qualquer empresa
                                    É Ideal para o empreendedor que quer crescer!
                                    </article>
                                </li>
                                <li>
                                    <i class="bi bi-currency-dollar"></i>
                                    <article>
                                    A securitização atua com a transformação dos recebíveis de uma empresa em títulos negociáveis, esses títulos
                                    podem ser vendidos a investidores. Uma das maiores vantagens da securitização é que ela não tem a incidência de
                                    IOF em suas operações.
                                    </article>
                                </li>
                            </ul>
                        </div>
                        <div class="box_body_second_right">
                            <menu>
                                <aside>
                                    <i class="bi bi-chevron-up"></i>
                                </aside>
                                <ul>
                                    <li><img alt="Imagem1"></li>
                                    <li><img alt="Imagem2" class="imagem_destaque"></li>
                                    <li><img alt="Imagem3"></li>
                                </ul>
                                <aside>
                                    <i class="bi bi-chevron-down"></i>
                                </aside>
                            </menu>                      
                        </div>
                    </div>
                </main>

                <footer id="box_footer_second">
                    <div class="box_footer_second_center">
                        <aside>
                            <h1>+ <span>0</span></h1>
                            <h2>Empresas atendidas em toda nossa história!</h2>
                        </aside>
                        <aside>
                            <h1>+ <span>0</span></h1>
                            <h2>Bilhões de crédito cedido durante 2021!</h2>
                        </aside>
                        <aside>
                            <h1>+ <span>0</span></h1>
                            <h2>Estados atendidos!</h2>
                        </aside>
                    </div>
                </footer>
                
            </section>

            <section id="section_container_thirty" class="hidden_class_thirty">
                <header id="box_header_thirty">
                    <h1>Como posso abrir minha conta?</h1>
                    <div class="box_process_thirty">
                        <aside>
                            <i class="bi bi-cash-coin"></i>
                            <h2><span>1º</span> passo</h2>
                            <h3>Sua empresa vende a prazo para seus clientes.</h3>
                        </aside>
                        <aside>
                            <i class="bi bi-currency-exchange"></i>
                            <h2><span>2º</span> passo</h2>
                            <h3>A Ideal Securitizadora compra essa venda a prazo e paga pra você à vista.</h3>
                        </aside>
                        <aside>
                            <i class="bi bi-piggy-bank-fill"></i>
                            <h2><span>3º</span> passo</h2>
                            <h3>Você recebe o dinheiro na sua conta na hora, sem burocracia.</h3>
                        </aside>
                    </div>
                </header>

                <main id="box_body_thirty">
                    <h1>Mas afinal, quem somos?</h1>
                    <div class="box_body_about">
                        <picture>
                            <img>
                        </picture>
                        <article>
                            <h2>SOMOS A COMPANHIA<br> <span>IDEAL</span> PARA SUA EMPRESA!</h2>
                            <p>
                                A Ideal Securitizadora é feita para todo o tipo de empreendedor, seja grande ou pequeno.
                                É para quem quer investir ou precisa de capital de giro rápido, sem comprometer a saúde financeira da
                                empresa.
                                Se você, empreendedor, está preocupado com as contas de início do ano, nós podemos te ajudar. Para manter as
                                contas em dia sem se preocupar, entre em contato com a Ideal Securitizadora e antecipe seus recebíveis.
                            </p>
                            <ul class="list_about_index">
                                <li>✔️ Nada de empréstimo com juros altos.</li>
                                <li>✔️ Nada de dívidas para se preocupar.</li>
                            </ul>
                            <p class="title_about_index">Com a   antecipação você trabalha com um dinheiro que já é seu, uma forma segura e prática de arrecadar capital.
                            </p>
                            <p>
                                Te ajudamos a manter o seu fluxo de caixa ativo, sem você esperar para receber as suas vendas feitas a
                                prazo.
                            </p>
                            <ul class="list_about_index">
                                <li>✅ Sem burocracia;</li>
                                <li>✅ Sem IOF;</li>
                                <li>✅ Sem consulta ao histórico financeiro da sua empresa. Aqui você tem dinheiro na mão em até 2h! </li>
                            </ul>
                            <p>
                                Sem perder tempo com burocracia e filas demoradas, a antecipação de recebíveis é uma linha de crédito
                                rápida e segura. 
                            </p>
                        </article>
                    </div>
                </main>

                <footer id="box_footer_thirty">
                    <aside>
                        <h1>Ainda possui dúvidas?</h1>
                    </aside>
                    <ul>
                        <li class="hidden_class_thirty">
                            <article>
                                <h2>Quem pode solicitar?</h2>
                                <i class="bi bi-plus-lg"></i>
                            </article>
                            <article class="questions_disabled">
                                <p>Qualquer pessoa jurídica, ou seja, que tenha um CNPJ, pode antecipar seus recebíveis.</p>
                            </article>
                        </li>
                        <li class="hidden_class_thirty">
                            <article>
                                <h2>A securitizadora faz empréstimos?</h2>
                                <i class="bi bi-plus-lg"></i>
                            </article>
                            <article class="questions_disabled">
                                <p>Não. O que a securitizadora faz é comprar os recebíveis a prazo. Assim, você está vendendo o seu direito de receber por eles. Quem passa a ter esse direito é quem fica de posse dos, então, ativos recebíveis.</p>
                            </article>
                        </li>
                        <li class="hidden_class_thirty">
                            <article>
                                <h2>Quem participa da securitização de recebíveis?</h2>
                                <i class="bi bi-plus-lg"></i>
                            </article>
                            <article class="questions_disabled">
                                <p>A securitização envolve três partes, o originador, o intermediário e os investidores. Conheça melhor cada um deles: <br><br>
                                    <b>- Originador ou gerador</b> = quem gera o ativo, a empresa detentora do recebível;<br>
                                    <b>- Intermediário</b> = a instituição que estruturará a operação e distribuirá os títulos aos investidores;<br>
                                    <b>- Investidor</b> = quem compra os títulos e assume a sua rentabilidade.<br>
                                </p>
                            </article>
                        </li>
                        <li class="hidden_class_thirty">
                            <article>
                                <h2>Qual o papel da securitizadora?</h2>
                                <i class="bi bi-plus-lg"></i>
                            </article>
                            <article class="questions_disabled">
                                <p>Basicamente, o processo de securitização cria liquidez para empresas ao permitir que investidores menores comprem seus recebíveis como títulos mobiliários. Ou seja, a securitizadora faz o agrupamento das dívidas contratuais e depois vende os direitos creditórios dessas aos investidores.</p>
                            </article>
                        </li>
                        <li class="hidden_class_thirty">
                            <article>
                                <h2>Qual é a diferença de factoring e Securitizadora?</h2>
                                <i class="bi bi-plus-lg"></i>
                            </article>
                            <article class="questions_disabled">
                                <p>A Factoring, tem por objeto a prestação cumulativa e contínua de uma gama de serviços e a administração dos recebíveis, conjugada, ou não, com sua aquisição. A Securitizadora tem por propósito único e específico, a aquisição e securitização de ativos empresariais.</p>
                            </article>
                        </li>
                    </ul>
                </footer>
            </section>

        </main>

        <section class="fullscreen_window_hidden"></section>
        <?php include('includes/footer.php'); ?>

    </div>

</body>
</html>