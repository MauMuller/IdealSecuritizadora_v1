{
    "use strict";

    //GERAL
    const fullscreen = document.querySelector("section.fullscreen_window_hidden");

    //HEADER
    const header_container = document.querySelector("header#header_container");
    const navegation_header = document.querySelectorAll("nav.navegation_header ul li");
    const navegation_header_links = document.querySelectorAll("nav.navegation_header ul li a");
    const navegation_soc_change = document.querySelector("nav.navegation_soc_disable");
    const navegation_soc_links = document.querySelectorAll("nav#navegation_soc ul li a");
    const img_header_link = document.querySelector("picture.box_header a");
    const img_header = document.querySelector("picture.box_header a img");

    //MOBILE
    const [mobile_elements, burguer_navegation_links] = [
        document.querySelectorAll("i.icons_menu, nav#burguer_navegation"),
        document.querySelectorAll("nav#burguer_navegation ul li a") ];

    //FOOTER
    const img_footer = document.querySelector("img.img_footer");

    //PÁGINA PRINCIPAL
    const form_principal = document.querySelector("form.form_principal");
    const section_container_second = document.querySelector("section#section_container_second");
    const article_box_second = document.querySelector("article.article_box_second");
    const container_video = document.querySelector("div.video_box_second");
    const video = document.querySelector("div.video_box_second video");
    const video_menu_container = document.querySelector("div.video_box_second menu");
    const menuFirst = document.querySelectorAll("div.video_box_second menu ul:first-child li i");
    const menuLast = document.querySelectorAll("div.video_box_second menu ul:last-child li i");
    const vol_range = document.querySelector("div.video_box_second menu ul:last-child li input");
    const box_body_second_container = document.querySelector("div#box_body_second_container");
    const imgs_carossel = document.querySelectorAll("div.box_body_second_right menu ul li img");
    const setas_carossel = document.querySelectorAll("div.box_body_second_right menu aside");
    const numbersContadores = document.querySelectorAll("div.box_footer_second_center aside h1 span");
    const veja_mais = document.querySelector("article.icons_more");
    const recapcha = document.querySelector("form.form_principal aside div picture menu div");
    const recapcha_questions_container = document.querySelector("form.form_principal aside div picture section");
    const recaptcha_questions = document.querySelectorAll("form.form_principal aside div picture section ul:first-of-type li");
    const recapcha_button = document.querySelector("form.form_principal aside div picture section ul:last-child li");
    const recapcha_text = document.querySelector("form.form_principal aside div picture section h2 span");
    const recapcha_h2 = document.querySelector("form.form_principal aside div picture section h2");
    const imgs_boxes = document.querySelectorAll("div.box_body_second_right menu ul li");
    const campos_pesquisa = document.querySelectorAll("form.form_principal aside div input");
    const icon_campos = document.querySelectorAll("form.form_principal aside div i");
    const box_tip = document.querySelector("form.form_principal aside div article");
    const container_questions =  document.querySelector("footer#box_footer_thirty");
    const questions = document.querySelectorAll("footer#box_footer_thirty ul li");
    const resp_questions = document.querySelectorAll("footer#box_footer_thirty ul li article:last-child");
    const icons_article_faq = document.querySelectorAll("footer#box_footer_thirty ul li article:first-child i");
    const section_container_thirty = document.querySelector("section#section_container_thirty");
 
    //O QUE É SECURITIZADORA
    const container_about_sec = document.querySelector("section#about_sec_second_container");
    const title_about_sec = document.querySelector("section#about_sec_first_container article");
    const container_about_sec_h1 = document.querySelector("section#about_sec_second_container h1");
    const container_about_sec_article = document.querySelector("section#about_sec_second_container article");
    const container_about_sec_video = document.querySelector("section#about_sec_second_container div");
    const container_about_sec_video_h2 = document.querySelector("section#about_sec_second_container h2");
    const span_to_map = document.querySelector("section#about_sec_second_container h2 span");
    const about_sec_thirty_container = document.querySelector("section#about_sec_thirty_container");
    const about_sec_thirty_container_map = document.querySelector("section#about_sec_thirty_container div");
    const about_sec_thirty_itens = document.querySelectorAll("picture.map_securitizadora ul li");
    const about_sec_thirty_popups = document.querySelectorAll("picture.map_securitizadora ul article");
    const about_sec_thirty_text = document.querySelectorAll("picture.map_securitizadora ul article p");

    //INSTITUCIONAL
    const institucional_h1 = document.querySelector("section#institucional_first_container menu article summary h1");
    const institucional_p = document.querySelector("section#institucional_first_container menu article summary p");
    const institucional_img = document.querySelector("section#institucional_first_container menu picture img");
    const institucional_container_imgs = document.querySelector("section#institucional_second_container div");
    const institucional_container_imgs_comp = document.querySelector("section#institucional_second_container div figure");
    const institucional_imgs_comp = document.querySelectorAll("section#institucional_second_container div figure img");
    const institucional_texts = document.querySelectorAll("section#institucional_thirty_container div");

    //ACESSO AO CLIENTE
    // const client_acess_title = document.querySelector("section#client_acess_container div h1");
    // const client_acess_form = document.querySelector("section#client_acess_container div form");
    // const client_acess_inputs = document.querySelectorAll("section#client_acess_container div form aside input");
    // const client_acess_img = document.querySelector("section#client_acess_container div form aside i");

    //CONTATO
    const contact_inputs = document.querySelectorAll("section#contact_container menu form div input");
    const contact_icons = document.querySelectorAll("section#contact_container menu form div i:last-child");
    const tip_icon_contact = document.querySelector("section#contact_container menu form div:nth-child(5) i:last-of-type");
    const tip_contact = document.querySelector("section#contact_container menu form div article");
    const contact_recapcha_button = document.querySelector("section#contact_container menu form div picture menu aside div");
    const contact_recapcha_container = document.querySelector("section#contact_container menu form div picture section");
    const contact_recapcha_questions = document.querySelectorAll("section#contact_container menu form div picture section ul:first-of-type li");
    const contact_recapcha_title = document.querySelector("section#contact_container menu form div picture section h2");
    const contact_recapcha_title_span = document.querySelector("section#contact_container menu form div picture section h2 span");
    const contact_recapcha_validar = document.querySelector("section#contact_container menu form div picture section ul:last-of-type li");

    //BOTH MENU
    const burguer_default_menu = [burguer_navegation_links[2], navegation_header_links[2]];

    //JS
    const error_inputs = document.querySelector("span.error_inputs");
    const events = [{mouseover: "mouseover"},{mouseout: "mouseout"}]
    const elements = [video, video_menu_container];
    const copyLinkArrayPrincipal = [];
    let valorRecapcha;
    let clickCapcha=true;
    let clickEye=false;
    let arrChars = [];
    let mobile_width=false;
    const blockChars = [{
        numbers:[0,1,2,3,4,5,6,7,8,9],
        special:["`","´",",","~","!","#","$","^",".","¨"]
        }];

    //INFORME O LINK DO SITE OU LOCAL AQUI
    // const link = 'http://localhost/securitizadora/';
    const link = 'https://idealsecuritizadora.com/site/';

    if(window.location.href === link){
        //...PÁGINA PRINCIPAL...
        let random_array = []; 

        //CONTADOR DAS IMAGENS
        let contIMG = 1;

        //TAMANHO DO CONTAINER "O QUE É SECURITIZADORA"
        let contScale = 1.12;

        //ARRAY DE IMAGENS PARA O CAROSSEL
        const array_imgs = [{imgs:[
                                    {id:1, url:["images/comment/comment1.png","images/comment/comment2.png", "images/comment/comment3.png"]},
                                    {id:2, url:["images/comment/comment2.png","images/comment/comment3.png", "images/comment/comment4.png"]},
                                    {id:3, url:["images/comment/comment3.png","images/comment/comment4.png", "images/comment/comment5.png"]},
                                    {id:4, url:["images/comment/comment4.png","images/comment/comment5.png", "images/comment/comment1.png"]},
                                    {id:5, url:["images/comment/comment5.png","images/comment/comment1.png", "images/comment/comment2.png"]}
                                ]}];

        //SER REDIMENSIONADO PARA BAIXO
        veja_mais.addEventListener("click",()=>{
            section_container_second.scrollIntoView({block: 'nearest'});
        });

        //IR PARA AS DÚVIDAS
        burguer_default_menu.forEach((menu)=>{
            menu.addEventListener('click',()=>{
                container_questions.scrollIntoView({block: "start", behavior: "smooth"});
                localStorage.setItem('doubtsBool', false);
            });
        });

        //MOSTRAR FORM NA TELA
        form_principal.classList.add("visible_element");
        form_principal.classList.remove("hidden_element");
    
        //CARREGAR AS IMAGENS DO ARRAY NAS TAG DE IMAGENS
        window.addEventListener("load",()=>{
            if(window.innerWidth <= 1100){
                form_principal.classList.add("form_principal_relative");
                mobile_width=true;
            }

            array_imgs.forEach((obj)=>{
                obj.imgs.forEach((val)=>{
                    if(val.id===contIMG){
                        val.url.forEach((itens,ind_url)=>{
                            imgs_carossel.forEach((img,ind_img)=>{
                                if(ind_url===ind_img){
                                    img.setAttribute("src",itens);
                                }
                            });
                        });
                    }
                });
            });

            if(localStorage.getItem("doubtsBool")==="true"){
                container_questions.scrollIntoView({block: "start", behavior: "smooth"});
                localStorage.removeItem("doubtsBool");
            }
        });

        //AUMENTAR E DIMINUIR CONTAINER "O QUE É SECURITIZADORA"
        window.addEventListener("wheel",(event)=>{
            if(window.scrollY >= 100 && window.scrollY <= 1200){
                if(event.deltaY >= 100){
                    contScale -= 0.01;
                    contScale = contScale < 1.01 ? 1.01 : contScale;
                    article_box_second.style.transform = `scale(${contScale})`;
                } else {
                    contScale += 0.01;
                    contScale = contScale > 1.12 ? 1.12 : contScale;
                    article_box_second.style.transform = `scale(${contScale})`;
                }
            }
        });

        //APARECER MENU NO VÍDEO
        menuVideo(events,elements,video_menu_container);

        //PLAYER DE VIDEO (CONFIGS)
        playerVideoFirstPart(menuFirst,video);

        playerVideoLastPart(menuLast,vol_range,video,fullscreen,video_menu_container,article_box_second,container_video);

        //CAROSSEL
        setas_carossel.forEach((val,ind)=>{
            val.addEventListener("click",()=>{
                
                if(ind===0){
                    contIMG++;
                    contIMG = contIMG > 5 ? 1 : contIMG;
                } else {
                    contIMG--;
                    contIMG = contIMG < 1 ? 5 : contIMG;
                }

                array_imgs.forEach((val)=>{
                    val.imgs.forEach((obj,ind)=>{
                        if(obj.id === contIMG){
                            obj.url.forEach((itens,ind_url)=>{
                                    imgs_carossel.forEach((imgs,ind_imgs)=>{
                                            if(ind_url === ind_imgs){
                                                setTimeout(()=>{
                                                    imgs.setAttribute("src",itens);
                                                },400);
                                            }
                                    });
                            });
                        }
                    });
                });

                try{
                    imgs_boxes.forEach((val)=>{
                        val.setAttribute("class","animation_imgs_true");
                    });
                } 
                finally{
                    setTimeout(()=>{
                        imgs_boxes.forEach((val)=>{
                            val.setAttribute("class","animation_imgs_false");
                        });
                    },500);
                }
            });
            
        });

        // console.log(campos_pesquisa);

        //FORMULÁRIO
        campos_pesquisa.forEach((input,ind_campos)=>{
            if(ind_campos >= 0 && ind_campos <= 4){
                icon_campos.forEach((icons,ind_icons)=>{
                    if(ind_icons === ind_campos){   
                        let lastletter;
                        input.addEventListener("input",(event)=>{
                            switch(ind_campos){
                                //CAMPO 'NOME'
                                case 0:
                                    lastletter = event.target.value.substring(event.target.value.length-1);
                                    blockChars.forEach((obj,ind_obj)=>{
                                        obj.numbers.forEach((num,ind_num)=>{
                                            obj.special.forEach((spec,ind_spec)=>{
                                                if(ind_obj === ind_num || ind_obj === ind_spec){
                                                    if(String(num)===lastletter || spec===lastletter){
                                                        input.value = input.value.substr(0,input.value.length-1);
                                                    }
                                                }
                                            });
                                        });
                                    });

                                    if(input.value.length < 3){
                                        if(icons.classList.contains("bi bi-patch-check verify_text")){
                                            icons.classList.remove("bi bi-patch-check verify_text");
                                        }
                                        icons.setAttribute("class","bi bi-x-octagon wrong_text");
                                        input.classList.add("wrong_input");
                                        input.classList.remove("verify_input");

                                    } else {
                                        if(icons.classList.contains("bi bi-x-octagon wrong_text")){
                                            icons.classList.remove("bi bi-x-octagon wrong_text");
                                        }
                                        icons.setAttribute("class","bi bi-patch-check verify_text");
                                        input.classList.add("verify_input");
                                        input.classList.remove("wrong_input");
                                    }

                                    break;
                                //CAMPO 'FONE'
                                case 1:
                                    lastletter = event.target.value.substring(event.target.value.length-1);
                                    if(isNaN(lastletter) || input.value.length >= 15){
                                        input.value = input.value.substr(0,input.value.length-1);
                                    } else {
                                        input.value = maskPhone(input.value);
                                        if(isPhone(input.value)){
                                            if(icons.classList.contains("bi bi-x-octagon wrong_text")){
                                                icons.classList.remove("bi bi-x-octagon wrong_text");
                                            }
                                            icons.setAttribute("class","bi bi-patch-check verify_text");
                                            input.classList.add("verify_input");
                                            input.classList.remove("wrong_input");

                                        } else {
                                            if(icons.classList.contains("bi bi-patch-check verify_text")){
                                                icons.classList.remove("bi bi-patch-check verify_text");
                                            }
                                            icons.setAttribute("class","bi bi-x-octagon wrong_text");
                                            input.classList.add("wrong_input");
                                            input.classList.remove("verify_input");

                                        }
                                    }
                                    
                                    break;
                                //CAMPO 'EMAIL'
                                case 2:
                                    if(isEmail(input.value)){
                                        if(icons.classList.contains("bi bi-x-octagon wrong_text")){
                                            icons.classList.remove("bi bi-x-octagon wrong_text");
                                        }
                                        icons.setAttribute("class","bi bi-patch-check verify_text");
                                        input.classList.add("verify_input");
                                        input.classList.remove("wrong_input");

                                    } else {
                                        if(icons.classList.contains("bi bi-patch-check verify_text")){
                                            icons.classList.remove("bi bi-patch-check verify_text");
                                        }
                                        icons.setAttribute("class","bi bi-x-octagon wrong_text");
                                        input.classList.add("wrong_input");
                                        input.classList.remove("verify_input");

                                    }
                                    break;
                                //CAMPO 'CNPJ'
                                case 3:
                                    lastletter = event.target.value.substring(event.target.value.length-1);
                                    if(isNaN(Number(lastletter)) || input.value.length >= 19){
                                        input.value = input.value.substr(0,input.value.length-1);
                                    } else {
                                        input.value = maskCNPJ(input.value);
                                        if(isCNPJ(input.value)){
                                            if(icons.classList.contains("bi bi-x-octagon wrong_text")){
                                                icons.classList.remove("bi bi-x-octagon wrong_text");
                                            }
                                            icons.setAttribute("class","bi bi-patch-check verify_text");
                                            input.classList.add("verify_input");
                                            input.classList.remove("wrong_input");

                                        } else {
                                            if(icons.classList.contains("bi bi-patch-check verify_text")){
                                                icons.classList.remove("bi bi-patch-check verify_text");
                                            }
                                            icons.setAttribute("class","bi bi-x-octagon wrong_text");
                                            input.classList.add("wrong_input");
                                            input.classList.remove("verify_input");

                                        }
                                    } 
                                    break;
                                case 4:
                                    //CAMPO 'FATURAMENTO'
                                    lastletter = event.target.value.substring(event.target.value.length-1);
                                    if(isNaN(Number(lastletter)) || input.value.length >= 15){
                                        input.value = input.value.substr(0,input.value.length-1);
                                    } else {
                                        input.value = maskMoney(input.value);
                                        icons.setAttribute("class","bi bi-exclamation-octagon info-campo");
                                        if(ind_icons === 4){
                                            icons.addEventListener("mouseenter",()=>{
                                                if(box_tip.classList.contains("hidden_tip")){
                                                    box_tip.classList.remove("hidden_tip");
                                                }
                                                box_tip.classList.add("visible_tip");
                                            });

                                            icons.addEventListener("mouseleave",()=>{
                                                if(box_tip.classList.contains("visible_tip")){
                                                    box_tip.classList.remove("visible_tip");
                                                }
                                                box_tip.classList.add("hidden_tip");
                                            });
                                        }
                                    }
                                    break;
                            }
                        });
                    }
                });

                //TIRAR ESPAÇOS QUANDO MUDAR EVENTO
                input.addEventListener("change",()=>{
                    input.value = input.value.trim();
                });

                //IMPOSSÍVEL DE COLAR NOS CAMPOS
                input.addEventListener("paste",(paste)=>{
                    paste.preventDefault();
                    return false;
                });
            } else {
                //BOTÃO
                input.addEventListener("click",(event)=>{
                    event.preventDefault();

                    let check_inputs_validation=false;
                    const arrInputs=[];
                    clearTimeout(clearArrowTime()); 

                    for(let i=0; i<campos_pesquisa.length-1; i++){
                        // console.log(campos_pesquisa[i]);
                        if(campos_pesquisa[i].value === ""){
                            error_inputs.innerHTML = `<p>*Campos em branco!</p>`;
                            check_inputs_validation=false;
                            break;
                        } else {
                            if(campos_pesquisa[0].value.length >= 3 && 
                                isPhone(campos_pesquisa[1].value) &&
                                isEmail(campos_pesquisa[2].value) &&
                                isCNPJ(campos_pesquisa[3].value) &&
                                campos_pesquisa[4].value.length >= 3){
                                    arrInputs.push(campos_pesquisa[i].value);
                                    check_inputs_validation=true;
                                } else {
                                    error_inputs.innerHTML = `<p>*Campos incorretos!</p>`;
                                    check_inputs_validation=false;
                                    break;
                                }
                        }
                    }
                    limpaCampos();

                    if(check_inputs_validation){
                        fetch('./envia_email/envia_email.php',{
                            method: 'POST',
                            headers: {
                                "Content-type": "application/json; charset=UTF-8"
                            },
                            body: JSON.stringify(arrInputs) //ARRAY COM OS DADOS!
                        })
                        .then((response) => response.json())
                        .then((dados) => {
                            if(dados[1]){
                                error_inputs.innerHTML = `<p>Email Enviado, obrigado!</p>`;
                                error_inputs.classList.remove('wrong_text');
                                error_inputs.classList.add('verify_text');
                            } else {
                                error_inputs.innerHTML = `<p>Falha ao enviar, por favor, tente novamente!</p>`;
                                error_inputs.classList.add('wrong_text');
                                error_inputs.classList.remove('verify_text');
                            }

                            setTimeout(()=>{
                                error_inputs.classList.remove('verify_text');
                                error_inputs.classList.add('wrong_text');
                                error_inputs.innerHTML = "";
                            },4000);
                        });

                        error_inputs.classList.remove('verify_text');
                        error_inputs.classList.remove('wrong_text');
                        error_inputs.innerHTML = `<p>Enviando...</p>`;
                    }
                });
            }
        });

        //RECAPTCHA
        recapcha.addEventListener("click",()=>{
            let pauseTime=false;
            let timeRecapcha;

            if(clickCapcha){
            recapcha.setAttribute('class','button_recapcha_loading');
                setTimeout(()=>{
                    if(recapcha_questions_container.classList.contains("recapcha_questions_hidden")){
                        recapcha_questions_container.classList.remove("recapcha_questions_hidden");
                        recapcha_questions_container.classList.add("recapcha_questions_visible");

                        for(let i=0; i<10; i++){
                           timeRecapcha = setTimeout(()=>{
                                if(pauseTime){
                                    clearTimeout(timeRecapcha);
                                } else {
                                    i++;
                                    if(i === 10){
                                        recapcha_questions_container.classList.add("timeout_recapcha");
                                        recapcha_h2.innerHTML = "TEMPO LIMITE ESGOTADO!";  
                                        recaptcha_questions.forEach(quest => {
                                            quest.classList.add("disabled_elements");
                                            if(quest.className.indexOf("item_recapcha_ckecked")!==-1){
                                                quest.classList.remove("item_recapcha_ckecked");
                                            }
                                        });
                                        recapcha_button.classList.add("disabled_elements");
                                        
                                        setTimeout(()=>{
                                            recapcha_questions_container.classList.remove("timeout_recapcha");
                                            recapcha_questions_container.classList.remove("recapcha_questions_visible");
                                            recapcha_questions_container.classList.add("recapcha_questions_hidden");
                                            recapcha.classList.remove("button_recapcha_loading");
                                            recapcha.classList.add("button_recapcha_fail");
                                            campos_pesquisa[5].classList.add("wrong_button");
                                            campos_pesquisa[5].classList.remove("verify_button");
                                            campos_pesquisa[5].disabled = true;
                                        },2000); 
                                    }
                                }
                            },2000*i);
                        }
                    }
                },2300);
                clickCapcha=false;
            }
        

            //RECAPCHA_ACTIVED
            recaptcha_questions.forEach((valor,ind_val)=>{
                valor.value = randomNumber();
                valor.innerHTML = valor.value;
                
                //GERAR ARRAY COM OS NUMEROS ALEÁTORIOS
                random_array.push(valor.value);
                
                let arrVal = [0,1,2,3,4,5];
                arrVal.forEach((num)=>{
                    valor.addEventListener("click",()=>{
                        if(ind_val === num){
                            for(let i=0; i<recaptcha_questions.length; i++){
                                if(recaptcha_questions[i].classList.contains("item_recapcha_ckecked") ){
                                    recaptcha_questions[i].classList.remove("item_recapcha_ckecked");
                                }
                            }
                            valor.classList.add("item_recapcha_ckecked");
                            valorRecapcha = valor.value;

                        }
                    });
                });
            });


            //INDICE
            recapcha_text.value = indiceRandom(random_array);
            recapcha_text.innerHTML = recapcha_text.value;

            //RECAPHA_BUTTON
            recapcha_button.addEventListener("click",()=>{
                if(recapcha_questions_container.classList.contains("recapcha_questions_visible") && valorRecapcha !== undefined){
                    recaptcha_questions.forEach((quest)=>{
                        if(quest.className.indexOf("item_recapcha_ckecked")!==-1){
                            quest.classList.remove("item_recapcha_ckecked");
                        }
                    });
                    recapcha_questions_container.classList.add("recapcha_questions_hidden");
                    recapcha_questions_container.classList.remove("recapcha_questions_visible");

                    pauseTime = true;
                        
                    if(valorRecapcha === recapcha_text.value){
                        recapcha.classList.remove("button_recapcha_loading");
                        recapcha.classList.add("button_recapcha_sucess");
                        campos_pesquisa[5].classList.remove("wrong_button");
                        campos_pesquisa[5].classList.add("verify_button");
                        campos_pesquisa[5].disabled = false;
                    } else {
                        recapcha.classList.remove("button_recapcha_loading");
                        recapcha.classList.add("button_recapcha_fail");
                        campos_pesquisa[5].classList.add("wrong_button");
                        campos_pesquisa[5].classList.remove("verify_button");
                        campos_pesquisa[5].disabled = true;
                    }
                } else {
                    recapcha_questions_container.classList.add("eartquake_recapcha");
                    recapcha_questions_container.style.animation = "none";
                    setTimeout(()=>{
                        recapcha_questions_container.style.animation = "";
                    },5);
                }
            });
        }); 

        //FAQ
        questions.forEach((containers,ind_cont)=>{
            containers.addEventListener("click",()=>{
                resp_questions.forEach((text,ind_text)=>{
                    if(!text.classList.contains("questions_disabled")){
                        if(ind_text === ind_cont){
                            text.classList.add("questions_disabled");
                            icons_article_faq.forEach((icon,ind_icones)=>{
                                if(ind_icones === ind_cont){
                                    icon.setAttribute('class','bi bi-plus-lg rotateToPlus');
                                }
                            });
                        } else {
                            text.classList.add("questions_disabled");
                            icons_article_faq.forEach((icon,ind_icones)=>{
                                if(ind_icones !== ind_cont){
                                    icon.setAttribute('class','bi bi-plus-lg rotateToPlus');
                                }
                            });
                        }
                    } else {
                        if(ind_text === ind_cont){
                            if(text.classList.contains("questions_disabled")){
                                text.classList.remove("questions_disabled");
                                icons_article_faq.forEach((icon,ind_icones)=>{
                                    if(ind_icones === ind_cont){
                                        icon.setAttribute('class','bi bi-dash rotateToDash');
                                    }
                                });
                            }
                        }
                    }
                });
            });
        });

        window.addEventListener('resize',()=>{
            if(window.innerWidth <= 1100){
                mobile_width=true;
                form_principal.classList.add("form_principal_relative");
            } else {
                mobile_width=false;
                form_principal.classList.remove("form_principal_relative");
            }
    
            if(window.innerWidth > 1000) {
                mobile_elements[1].classList.add("hidden","animation-hidden");
                document.body.classList.remove('trava-scroll');
            }
        });

        window.addEventListener("scroll",()=>{
            let scroll = parseInt(window.scrollY);

            //FORMULÁRIO FIXO OU RELATIVO
            if(!mobile_width){
                if(scroll >= 700){
                    form_principal.classList.add("form_principal_relative");
                } else {
                    form_principal.classList.remove("form_principal_relative");
                }
            } else {
                form_principal.classList.add("form_principal_relative");
            }
    
            //CONTADOR DE NUMEROS
            if(scroll >= 2010){
                contNumbers(numbersContadores);
            }
    
            //LEFT TO RIGHT CONTAINER (ANIMATION)
            if(scroll >= 1200){
                box_body_second_container.classList.add("show_class_second");
                box_body_second_container.classList.remove("hidden_class_second");
            } else {
                box_body_second_container.classList.add("hidden_class_second");
                box_body_second_container.classList.remove("show_class_second");
            }

            //SHOW BLUE CONTAINER (QUESTIONS)
            if(scroll >= 2400){
                section_container_thirty.classList.add("show_class_thirty");
                section_container_thirty.classList.remove("hidden_class_thirty");
            }

            //SHOW QUESTIONS (ANIMATION);
            if(elementRegardingTop(container_questions)){
                questions.forEach((quest,ind_quest)=>{
                    setTimeout(()=>{
                        quest.classList.add("show_class_thirty");
                        quest.classList.remove("hidden_class_thirty");
                    }, ind_quest*200);
                });
            }
        });
    } else {
        for(let i=0; i<navegation_header_links.length-1; i++){
            if(i != 2){
                let first_link = navegation_header_links[i].href.substr(0,navegation_header_links[i].href.indexOf("pages/"));
                let last_link = navegation_header_links[i].href.substr(navegation_header_links[i].href.indexOf("pages/")+6);
                copyLinkArrayPrincipal.push(first_link+last_link);
            } else {
                copyLinkArrayPrincipal.push(link);
            }
        }

        copyLinkArrayPrincipal.forEach((obj_array,ind_array)=>{

            for(let i=0; i<=navegation_header_links.length; i++){  
                if(ind_array === i){
                    navegation_header_links[i].setAttribute("href", obj_array);
                    // console.log(navegation_header_links[i].href);
                    burguer_navegation_links[i].setAttribute("href", obj_array);
                    // console.log('burguer: '+navegation_header_links.length+'\n'+'nav: '+burguer_navegation_links.length);
                }
            }

            if(window.location.href === obj_array){
                img_header.setAttribute("src","../images/logo/Logo03.png");
                img_footer.setAttribute("src","../images/logo/logo01.png");
                img_header_link.setAttribute("href","../");
                let id_header;

                switch(ind_array){
                    case 0:
                        //O QUE É SECURITIZADORA
                        id_header = header_container.getAttribute("id");

                        mobile_elements.forEach((element,ind_element)=>{ 
                            if(ind_element===0){
                                element.classList.add("icons_menu_blue");
                                
                                window.addEventListener('scroll',()=>{
                                    if(id_header==="header_container_active"){
                                        element.classList.remove("icons_menu_blue");
                                    } else {
                                        element.classList.add("icons_menu_blue");
                                    }
                                });
                            }

                        });

                        title_about_sec.classList.add("visible_element");
                        title_about_sec.classList.remove("hidden_element");

                        window.addEventListener("scroll",()=>{
                            let scroll = parseInt(window.scrollY);

                            if(scroll >= 650){
                                container_about_sec_h1.classList.add("translate_left_to_center");
                                container_about_sec_h1.classList.remove("hidden_element");
                                container_about_sec_article.classList.add("visible_element");
                                container_about_sec_article.classList.remove("hidden_element");
                                container_about_sec_video.classList.add("visible_element");
                                container_about_sec_video.classList.remove("hidden_element");
                            }

                            if(scroll >= 1500){
                                container_about_sec_video_h2.classList.add("translate_bottom_to_center");
                                container_about_sec_video_h2.classList.remove("hidden_element");
                            }
                            // console.log(scroll);
                            // console.log('img: '+parseInt(about_sec_thirty_container_map.getBoundingClientRect().top))

                            if(elementRegardingTop(about_sec_thirty_container_map)){
                                about_sec_thirty_container_map.classList.remove("hidden_element");
                                about_sec_thirty_container_map.classList.add("visible_element");
                            }
                        });

                        video_menu_container.classList.add("menu_reajuste_about");

                        window.addEventListener("scroll",()=>{
                            if(parseInt(window.scrollY) >= 800){
                                title_about_sec.classList.add("title_relative");
                                title_about_sec.classList.remove("title_fixed");
                            } else {
                                title_about_sec.classList.remove("title_relative");
                                title_about_sec.classList.add("title_fixed");
                            }
                        });

                        span_to_map.addEventListener("click",()=>{
                            about_sec_thirty_container.scrollIntoView({block: 'nearest'});
                        });

                        navegation_header_links.forEach((link)=>{
                            img_header.setAttribute("src","../images/logo/Logo02.png");
                            link.classList.add("navegation_change_color");
                            window.addEventListener("scroll",()=>{
                            if(parseInt(window.scrollY) < 50){
                                img_header.setAttribute("src","../images/logo/Logo02.png");
                                link.classList.add("navegation_change_color");
                            } else {
                                img_header.setAttribute("src","../images/logo/Logo03.png");
                                link.classList.remove("navegation_change_color");
                            }
                            });
                        });
                        
                        //APARECER MENU NO VÍDEO
                        menuVideo(events,elements,video_menu_container);

                        //PLAYER DE VIDEO (CONFIGS)
                        playerVideoFirstPart(menuFirst,video);

                        playerVideoLastPart(menuLast,vol_range,video,fullscreen,video_menu_container,container_about_sec,container_video);
                        
                        //CAPTURA DO "ENTRAR E SAIR DA DIV COM O MOUSE"
                        about_sec_thirty_itens.forEach((item,ind_item)=>{
                            events.forEach((event)=>{
                                about_sec_thirty_popups.forEach((popup,ind_pop)=>{
                                    about_sec_thirty_text.forEach((text,ind_text) =>{
                                        if(ind_item === ind_pop && ind_pop === ind_text){
                                            text.innerHTML = maxLengthWords(text.innerHTML);

                                            item.addEventListener(event.mouseover,()=>{
                                                popup.classList.add("visible_item");
                                            });
                                            item.addEventListener(event.mouseout,()=>{
                                                popup.classList.remove("visible_item");
                                            });
                                        }
                                    });
                                });
                            });
                        });

                        break;
                    case 1:   
                        //INSTITUCIONAL
                        institucional_h1.classList.add("translate_top_to_center");
                        institucional_h1.classList.remove("hidden_element");

                        institucional_p.classList.add("visible_element");
                        institucional_p.classList.remove("hidden_element");

                        institucional_img.classList.add("fly");
                        
                        window.addEventListener("scroll",()=>{
                            // console.log(parseInt(window.scrollY));

                            if(parseInt(window.scrollY) >= 350){
                                institucional_container_imgs.classList.add("visible_element");
                                institucional_container_imgs.classList.remove("hidden_element");
                            }

                            institucional_texts.forEach((div,ind_div)=>{
                                if (ind_div === 0) {
                                    if(elementRegardingTop(div)){
                                        div.classList.add("translate_left_to_center");
                                        div.classList.remove("hidden_element");
                                    }
                                } else {
                                    if(elementRegardingTop(div)){
                                        div.classList.add("translate_right_to_center");
                                        div.classList.remove("hidden_element");
                                    }
                                }
                            });
                        });
                        
                        institucional_imgs_comp.forEach((img,ind_img)=>{
                            events.forEach((evt)=>{

                                institucional_container_imgs_comp.addEventListener("wheel",(event)=>{
                                    event.preventDefault();
                                    institucional_container_imgs_comp.scrollLeft += (event.deltaY*2);
                                });

                                // img.addEventListener(evt.mouseover,()=>{
                                //     for(let i=0; i<institucional_imgs_comp.length; i++){
                                //         if(institucional_imgs_comp[i].classList.contains("img_zoom")){
                                //             institucional_imgs_comp[i].classList.remove("img_zoom");
                                //         }
                                //     }
                                //     img.classList.add("img_zoom");
                                // });
                            });
                        });
                        break;
                    case 3:
                        //CONTATO
                        let random_array=[];

                        contact_inputs.forEach((campo,ind_campo)=>{
                            campo.addEventListener("input", (evt_input)=>{
                                let input_bool=false;
                                let letter;
                                switch(ind_campo){
                                    case 0:
                                        letter = lastLetter(evt_input.target.value);
                                        blockChars.forEach((obj)=>{
                                            obj.numbers.forEach((nums)=>{
                                                obj.special.forEach((spec)=>{                                                        
                                                    if( ((nums.toString() === letter) || (spec === letter)) && !input_bool ){              
                                                        evt_input.target.value = evt_input.target.value.substr(0, evt_input.target.value.length-1);
                                                        input_bool=true;
                                                    } else {
                                                        
                                                    }
                                                });
                                            });
                                        });

                                        if(evt_input.target.value.length < 3){
                                            campo.classList.add("contact-wrong");
                                            campo.classList.remove("contact-verify");
                                            contact_icons[ind_campo].setAttribute("class","bi bi-x-octagon wrong_text");
                                        } else {
                                            campo.classList.remove("contact-wrong");
                                            campo.classList.add("contact-verify");
                                            contact_icons[ind_campo].setAttribute("class","bi bi-patch-check verify_text");
                                        }
                                        break;
                                    case 1:
                                        letter = lastLetter(evt_input.target.value);

                                        if(isNaN(parseInt(letter)) || evt_input.target.value.length > 14){
                                            evt_input.target.value = evt_input.target.value.substr(0,evt_input.target.value.length-1);
                                            input_bool=true;
                                        } else {
                                            evt_input.target.value = maskPhone(evt_input.target.value);

                                            if(!isPhone(evt_input.target.value)){
                                                campo.classList.add("contact-wrong");
                                                campo.classList.remove("contact-verify");
                                                contact_icons[ind_campo].setAttribute("class","bi bi-x-octagon wrong_text");
                                            } else {
                                                campo.classList.remove("contact-wrong");
                                                campo.classList.add("contact-verify");
                                                contact_icons[ind_campo].setAttribute("class","bi bi-patch-check verify_text");
                                            }
                                        }
                                        break;
                                    case 2:
                                        if(!isEmail(evt_input.target.value)){
                                            campo.classList.add("contact-wrong");
                                            campo.classList.remove("contact-verify");
                                            contact_icons[ind_campo].setAttribute("class","bi bi-x-octagon wrong_text");
                                        } else {
                                            campo.classList.remove("contact-wrong");
                                            campo.classList.add("contact-verify");
                                            contact_icons[ind_campo].setAttribute("class","bi bi-patch-check verify_text");
                                        }
                                        break;
                                    case 3:
                                        letter = lastLetter(evt_input.target.value);

                                        if(isNaN(parseInt(letter)) || evt_input.target.value.length > 18){
                                            evt_input.target.value = evt_input.target.value.substr(0, evt_input.target.value.length-1);
                                        } else {
                                            evt_input.target.value = maskCNPJ(evt_input.target.value); 
                                            if(isCNPJ(evt_input.target.value)){
                                                campo.classList.remove("contact-wrong");
                                                campo.classList.add("contact-verify");
                                                contact_icons[ind_campo].setAttribute("class","bi bi-patch-check verify_text");
                                            } else {
                                                campo.classList.add("contact-wrong");
                                                campo.classList.remove("contact-verify");
                                                contact_icons[ind_campo].setAttribute("class","bi bi-x-octagon wrong_text");
                                            }
                                        }
                                        break;
                                    case 4:
                                        letter = lastLetter(evt_input.target.value);
    
                                        if(isNaN(parseInt(letter)) || evt_input.target.value.length > 15){
                                            evt_input.target.value = evt_input.target.value.substr(0, evt_input.target.value.length-1);
                                        } else {
                                            evt_input.target.value = maskMoney(evt_input.target.value);
                                            tip_icon_contact.setAttribute("class","bi bi-exclamation-octagon info_campo");

                                            events.forEach((evt)=>{
                                                tip_icon_contact.addEventListener(evt.mouseover,()=>{
                                                    tip_contact.classList.add("visible_tip");
                                                    tip_contact.classList.remove("hidden_tip");
                                                });

                                                tip_icon_contact.addEventListener(evt.mouseout,()=>{
                                                    tip_contact.classList.add("hidden_tip");
                                                    tip_contact.classList.remove("visible_tip");
                                                });
                                            });


                          
                                        }
                                        break;
                                }
                            });

                            campo.addEventListener('click',(event)=>{
                                // console.log(error_inputs);
                                
                                if(ind_campo===5){
                                    //BOTÃO
                                    event.preventDefault();

                                    let check_inputs_validation=false;
                                    const arrInputs=[];
                                    clearTimeout(clearArrowTime());

                                    for(let i=0; i<contact_inputs.length-1; i++){
                                        if(contact_inputs[i].value === ""){
                                            error_inputs.innerHTML = `<p>*Campos em branco!</p>`;
                                            check_inputs_validation=false;
                                            break;
                                        } else {
                                            if(contact_inputs[0].value.length >= 3 && 
                                                isPhone(contact_inputs[1].value) &&
                                                isEmail(contact_inputs[2].value) &&
                                                isCNPJ(contact_inputs[3].value) &&
                                                contact_inputs[4].value.length >= 3){
                                                    arrInputs.push(contact_inputs[i].value);
                                                    check_inputs_validation=true;
                                                } else {
                                                    error_inputs.innerHTML = `<p>*Campos incorretos!</p>`;
                                                    check_inputs_validation=false;
                                                    break;
                                                }
                                        }
                                    }
                                    limpaCampos();

                                    if(check_inputs_validation){
                                        console.log(arrInputs);
                                        fetch('../envia_email/envia_email.php',{
                                            method: 'POST',
                                            headers: {
                                                "Content-type": "application/json; charset=UTF-8"
                                            },
                                            body: JSON.stringify(arrInputs) //ARRAY COM OS DADOS!
                                        })
                                        .then((response) => response.json())
                                        .then((dados) => {
                                            if(dados[1]){
                                                error_inputs.innerHTML = `<p>Email Enviado, obrigado!</p>`;
                                                error_inputs.classList.remove('wrong_text');
                                                error_inputs.classList.add('verify_text');
                                            } else {
                                                error_inputs.innerHTML = `<p>Falha ao enviar, por favor, tente novamente!</p>`;
                                                error_inputs.classList.add('wrong_text');
                                                error_inputs.classList.remove('verify_text');
                                            }

                                            setTimeout(()=>{
                                                error_inputs.classList.remove('verify_text');
                                                error_inputs.classList.add('wrong_text');
                                                error_inputs.innerHTML = "";
                                            },4000);
                                        });

                                        error_inputs.classList.remove('verify_text');
                                        error_inputs.classList.remove('wrong_text');
                                        error_inputs.innerHTML = `<p>Enviando...</p>`;
                                    }
                                }
                            });

                            //RECAPTCHA
                            contact_recapcha_button.addEventListener("click",()=>{
                                contact_recapcha_button.style.border = "none";
                                let pauseTime=false;
                                let timeRecapcha;
                                let valorRecapcha;

                                if(clickCapcha){
                                    fullscreen.setAttribute("class","fullscreen_window_visible");
                                    contact_recapcha_button.setAttribute('class','button_recapcha_loading');
                                    setTimeout(()=>{
                                        if(contact_recapcha_container.classList.contains("recapcha_questions_hidden")){
                                            contact_recapcha_container.classList.remove("recapcha_questions_hidden");
                                            contact_recapcha_container.classList.add("recapcha_questions_visible");

                                            for(let i=0; i<10; i++){
                                            timeRecapcha = setTimeout(()=>{
                                                    if(pauseTime){
                                                        clearTimeout(timeRecapcha);
                                                    } else {
                                                        i++;
                                                        if(i === 10){
                                                            contact_recapcha_container.classList.add("timeout_recapcha");
                                                            contact_recapcha_title.innerHTML = "TEMPO LIMITE ESGOTADO!";  
                                                            contact_recapcha_questions.forEach(quest => {
                                                                quest.classList.add("disabled_elements");
                                                                if(quest.className.indexOf("item_recapcha_ckecked")!==-1){
                                                                    quest.classList.remove("item_recapcha_ckecked");
                                                                }
                                                            });
                                                            contact_recapcha_validar.classList.add("disabled_elements");
                                                            
                                                            setTimeout(()=>{
                                                                contact_recapcha_container.classList.remove("timeout_recapcha");
                                                                contact_recapcha_container.classList.remove("recapcha_questions_visible");
                                                                contact_recapcha_container.classList.add("recapcha_questions_hidden");
                                                                contact_recapcha_button.classList.remove("button_recapcha_loading");
                                                                contact_recapcha_button.classList.add("button_recapcha_fail");
                                                                contact_inputs[5].classList.add("wrong_button");
                                                                contact_inputs[5].classList.remove("verify_button");
                                                                contact_inputs[5].disabled = true;
                                                                fullscreen.setAttribute("class","fullscreen_window_hidden");
                                                            },2000); 
                                                        }
                                                    }
                                                },2000*i);
                                            }
                                        }
                                    },2300);
                                    clickCapcha=false;
                                }
                            

                                //RECAPCHA_ACTIVED
                                contact_recapcha_questions.forEach((valor,ind_val)=>{
                                    let arrVal = [0,1,2,3,4,5];
                                    arrVal.forEach((num)=>{
                                        valor.value = randomNumber();
                                        //GERAR ARRAY COM OS NUMEROS ALEÁTORIOS
                                        random_array.push(valor.value);

                                        if(random_array.length > 6){
                                            random_array.splice(6);
                                        }

                                        random_array.forEach((val_arr,ind_arr)=>{
                                            if(ind_val===ind_arr){
                                                valor.innerHTML = val_arr;
                                            }

                                            valor.addEventListener("click",()=>{
                                                if(ind_arr===ind_val){
                                                    for(let i=0; i<contact_recapcha_questions.length; i++){
                                                        if(contact_recapcha_questions[i].classList.contains("item_recapcha_ckecked") ){
                                                            contact_recapcha_questions[i].classList.remove("item_recapcha_ckecked");
                                                        }
                                                    }
                                                    valor.classList.add("item_recapcha_ckecked");
                                                    valorRecapcha = val_arr;
                                                }
                                            });
                                        });
                                    });
                                });

                                //INDICE
                                contact_recapcha_title_span.innerHTML = indiceRandom(random_array);

                                //RECAPHA_BUTTON
                                contact_recapcha_validar.addEventListener("click",()=>{
                                    if(contact_recapcha_container.classList.contains("recapcha_questions_visible") && valorRecapcha !== undefined){
                                        contact_recapcha_questions.forEach((quest)=>{
                                            if(quest.className.indexOf("item_recapcha_ckecked")!==-1){
                                                quest.classList.remove("item_recapcha_ckecked");
                                            }
                                        });
                                        contact_recapcha_container.classList.add("recapcha_questions_hidden");
                                        contact_recapcha_container.classList.remove("recapcha_questions_visible");

                                        pauseTime = true;
                                                                                    
                                        if(valorRecapcha === parseInt(contact_recapcha_title_span.innerHTML)){
                                            contact_recapcha_button.classList.remove("button_recapcha_loading");
                                            contact_recapcha_button.classList.add("button_recapcha_sucess");
                                            contact_inputs[5].classList.remove("wrong_button");
                                            contact_inputs[5].classList.add("verify_button");
                                            contact_inputs[5].disabled = false;
                                        } else {
                                            contact_recapcha_button.classList.remove("button_recapcha_loading");
                                            contact_recapcha_button.classList.add("button_recapcha_fail");
                                            contact_inputs[5].classList.add("wrong_button");
                                            contact_inputs[5].classList.remove("verify_button");
                                            contact_inputs[5].disabled = true;
                                        }
                                        fullscreen.setAttribute("class","fullscreen_window_hidden");
                                    } else {
                                        contact_recapcha_container.classList.add("eartquake_recapcha");
                                        contact_recapcha_container.style.animation = "none";
                                        setTimeout(()=>{
                                            contact_recapcha_container.style.animation = "";
                                        },5);
                                    }
                                });
                            }); 

                            //TIRAR ESPAÇOS QUANDO MUDAR EVENTO
                            campo.addEventListener("change",()=>{
                                campo.value = campo.value.trim();
                            });

                            //IMPOSSÍVEL DE COLAR NOS CAMPOS
                            campo.addEventListener("paste",(paste)=>{
                                paste.preventDefault();
                                return false;
                            });
                        });

                        break;
                    // case 4:
                    //     //ACESSO CLIENTE
                    //     let keyCode;
                        
                    //     id_header = header_container.getAttribute("id");

                    //     mobile_elements.forEach((element,ind_element)=>{ 
                    //         if(ind_element===0){
                    //             element.classList.add("icons_menu_blue");
                                
                    //             window.addEventListener('scroll',()=>{
                    //                 if(id_header==="header_container_active"){
                    //                     element.classList.remove("icons_menu_blue");
                    //                 } else {
                    //                     element.classList.add("icons_menu_blue");
                    //                 }
                    //             });
                    //         }

                    //     });

                    //     client_acess_title.classList.remove("hidden_element");
                    //     client_acess_form.classList.remove("hidden_element");
                    //     client_acess_title.classList.add("translate_right_to_center");
                    //     client_acess_form.classList.add("visible_element");

                    //     navegation_header_links.forEach((link)=>{
                    //         img_header.setAttribute("src","../images/logo/Logo02.png");
                    //         link.classList.add("navegation_change_color");

                    //         window.addEventListener("scroll",()=>{
                    //         if(parseInt(window.scrollY) < 50){
                    //             img_header.setAttribute("src","../images/logo/Logo02.png");
                    //             link.classList.add("navegation_change_color");
                    //         } else {
                    //             img_header.setAttribute("src","../images/logo/Logo03.png");
                    //             link.classList.remove("navegation_change_color");
                    //         }
                    //         });
                    //     });

                    //     client_acess_inputs.forEach((campo,ind_campo)=>{
                    //         switch(ind_campo){
                    //             case 1:
                    //                 campo.addEventListener("input",(evt)=>{
                    //                     lastchar = evt.target.value.substr(evt.target.value.length-1, evt.target.value.length);
                    //                     if(keyCode !== 8){
                    //                         arrChars.push(lastchar);
                    //                     } else {
                    //                         arrChars.splice(arrChars.length-1,arrChars.length);
                    //                     }

                    //                     //Continua digitando no caracter que parou (letras ou ****)
                    //                     if(!clickEye){
                    //                         arrChars.forEach((letter)=>{
                    //                             client_acess_inputs[1].value = client_acess_inputs[1].value.replace(letter,'\u25CF');
                    //                         });
                    //                     } else {
                    //                         arrChars.forEach((letter)=>{
                    //                             client_acess_inputs[1].value = client_acess_inputs[1].value.replace('\u25CF',letter);
                    //                         });
                    //                     }
                    //                 });

                    //                 campo.addEventListener("keydown",(evtKey)=>{
                    //                     keyCode = evtKey.keyCode;
                    //                 });
                                    
                    //                 break;
                    //             case 2:
                    //                 break;
                    //         }
                    //     });      
                        
                    //     //MUDAR SENHA PARA ASTERISCO E VICE-VERSA
                    //     client_acess_img.addEventListener("click",()=>{
                    //         clickEye = !clickEye ? true : false;

                    //         if(!clickEye){
                    //             arrChars.forEach((letter)=>{
                    //                 client_acess_inputs[1].value = client_acess_inputs[1].value.replace(letter,'\u25CF');
                    //             });
                    //             client_acess_img.setAttribute("class","bi bi-eye-slash-fill");

                    //         } else {
                    //             arrChars.forEach((letter)=>{
                    //                 client_acess_inputs[1].value = client_acess_inputs[1].value.replace('\u25CF',letter);
                    //             });
                    //             client_acess_img.setAttribute("class","bi bi-eye-fill");
                    //         }
                    //     });
                    //     break;
                    default:
                        window.location.href = `${link}/pages/404.html`;
                        alert('Ainda sem funcionamento!');
                }
            }
        });
        contIndice=0;
    }

    if(window.location.href !== link){
        burguer_default_menu.forEach((menu)=>{
            menu.addEventListener('click',()=>{
                localStorage.removeItem('doubtsBool');
                localStorage.setItem('doubtsBool',true);
            });
        });
    }

    mobile_elements.forEach((element_mobile,ind_element_mobile)=>{
        element_mobile.addEventListener('click',()=>{
            ind_element_mobile === 0 ? openBurguer() : closeBurguer();
        });
    });

    const limpaCampos = ()=>{
        for(let i=0; i<campos_pesquisa.length-1; i++){
            campos_pesquisa[i].value="";
        }
    }

    const clearArrowTime = ()=>{ setTimeout(()=>{
        error_inputs.innerHTML= "";
    },2000)};

    const openBurguer = ()=>{
        document.body.classList.add('trava-scroll');
        mobile_elements[1].classList.add("visible");
        mobile_elements[1].classList.remove("hidden","animation-hidden");
    }
    const closeBurguer = ()=>{
        document.body.classList.remove('trava-scroll');
        mobile_elements[1].classList.remove("visible");
        mobile_elements[1].classList.add("hidden","animation-hidden");
    }
    
    //ATIVAR OU DESATIVAR O Array FIXO 
    window.addEventListener("scroll",()=>{
        if(parseInt(window.scrollY) > 50){
            header_container.setAttribute("id","header_container_active");
        } else {
            header_container.setAttribute("id","header_container");
        }
    });

    //Array (PASSAR MOUSE)
    navegation_header.forEach((obj,ind)=>{
        if(ind === 3){
            obj.addEventListener("mouseenter", ()=>{
                navegation_soc_change.setAttribute("class","navegation_soc_active");
                navegation_soc_links.forEach((obj)=>{
                    obj.setAttribute("id","navegation_soc_links_visible");
                });
            });
        }
    });

    //Array (TIRAR MOUSE)
    navegation_header.forEach((obj,ind)=>{
        if(ind === 3){
            obj.addEventListener("mouseleave", ()=>{
                navegation_soc_change.setAttribute("class","navegation_soc_disable");
                navegation_soc_links.forEach((obj)=>{
                    obj.setAttribute("id","navegation_soc_links_hidden");
                });
            });
        }
    });
}