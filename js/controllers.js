
{
    "use strict";
    let cont_porc = false;
    let arrRandom = [];
    let indice = 0;

    function contNumbers(numbers){
        if(cont_porc===false){
            numbers.forEach((val,ind)=>{
                switch(ind){
                    case 0:
                        for(let i=0; i<=1000; i++){
                            setTimeout(()=>{
                                if(i===1000){
                                    i = `${i-990}K`;
                                }
                                val.innerHTML = `${i}`;
                            }, i*2); 
                        }
                        break;
                    case 1:
                        for(let i=0; i<=4; i++){
                            setTimeout(()=>{
                                val.innerHTML = `${i}`;
                            }, i*180); 
                        }
                        break; 
                    case 2:
                        for(let i=0; i<=20; i++){
                            setTimeout(()=>{
                                val.innerHTML = `${i}`;
                            }, i*100); 
                        }
                        break;  
                }
            });
            cont_porc=true;
        }
    }

    function maskPhone(phone){
        switch(phone.length){
            case 1:
                phone = `(${phone}`;
                break;
            case 3:
                phone = `${phone})`;
                break;
            case 9:
                phone = `${phone}-`;
        }
        return phone;
    }

    function isPhone(phone){
        let ddd = phone.substr(phone.indexOf("(")+1,phone.indexOf(")")-1);
        let prefixo = phone.substr(phone.indexOf(")")+1,phone.indexOf("-"));
        let sufixo = phone.substr(phone.indexOf("-")+1,phone.length);

        if(prefixo.length > 5){
            prefixo = prefixo.slice(0,prefixo.indexOf("-"));
        }

        if(ddd.length === 2 && prefixo.length === 5 && (sufixo.length > 2 && sufixo.length < 5)){

            // console.log('ddd: '+ddd);
            // console.log('prexixo: '+prefixo);
            // console.log('sufixo: '+sufixo);
            return true;
        }else{
            return false;
        }
        // if(ddd
    }

    function isEmail(email){
        let user = email.substr(0,email.indexOf("@"));
        let domain = email.substr(email.indexOf("@")+1,email.length);

        if(user.length >= 1 && 
            domain.length >= 3 && 
            user.search("@")==-1 && 
            domain.search("@")==-1 &&
            domain.search(".")!= -1 &&
            domain.indexOf("." >= 1) &&
            domain.lastIndexOf(".") < domain.length - 1){
            return true;
        } else {
            return false;
        }
    }

    function maskCNPJ(event_cnpj){
        switch(event_cnpj.length){
            case 2:
                event_cnpj = `${event_cnpj}.`;
                break;
            case 6:
                event_cnpj = `${event_cnpj}.`;
                break;
            case 10:
                event_cnpj = `${event_cnpj}/`;
                break;
            case 15:
                event_cnpj = `${event_cnpj}-`;
                break;
            default:
                event_cnpj = event_cnpj;
                break;
        }
        return event_cnpj;
    }

    function isCNPJ(value) {
        if (!value) return false
    
        // Aceita receber o valor como string, número ou array com todos os dígitos
        const isString = typeof value === 'string'
        const validTypes = isString || Number.isInteger(value) || Array.isArray(value)
    
        // Elimina valor em formato inválido
        if (!validTypes) return false
    
        // Filtro inicial para entradas do tipo string
        if (isString) {
        // Limita ao máximo de 18 caracteres, para CNPJ formatado
        if (value.length > 18) return false
    
        // Teste Regex para veificar se é uma string apenas dígitos válida
        const digitsOnly = /^\d{14}$/.test(value)
        // Teste Regex para verificar se é uma string formatada válida
        const validFormat = /^\d{2}.\d{3}.\d{3}\/\d{4}-\d{2}$/.test(value)
    
        // Se o formato é válido, usa um truque para seguir o fluxo da validação
        if (digitsOnly || validFormat) true
        // Se não, retorna inválido
        else return false
        }
    
        // Guarda um array com todos os dígitos do valor
        const match = value.toString().match(/\d/g)
        const numbers = Array.isArray(match) ? match.map(Number) : []
    
        // Valida a quantidade de dígitos
        if (numbers.length !== 14) return false
        
        // Elimina inválidos com todos os dígitos iguais
        const items = [...new Set(numbers)]
        if (items.length === 1) return false
    
        // Cálculo validador
        const calc = (x) => {
        const slice = numbers.slice(0, x)
        let factor = x - 7
        let sum = 0
    
        for (let i = x; i >= 1; i--) {
            const n = slice[x - i]
            sum += n * factor--
            if (factor < 2) factor = 9
        }
    
        const result = 11 - (sum % 11)
    
        return result > 9 ? 0 : result
        }
    
        // Separa os 2 últimos dígitos de verificadores
        const digits = numbers.slice(12)
        
        // Valida 1o. dígito verificador
        const digit0 = calc(12)
        if (digit0 !== digits[0]) return false
    
        // Valida 2o. dígito verificador
        const digit1 = calc(13)
        return digit1 === digits[1]
    }

    function maskMoney(value){
        let money = 'R$';

        if(value.length === 1){
            value = `${money} ${value}`;
        }

        return value;
    }

    function videoTimeCurrent(currentTime){
        let min;
        let formatedTime;

        formatedTime = `00:0${currentTime}`;

        if(currentTime >= 10 && currentTime < 60 ){
            formatedTime = `00:${currentTime}`;
        } else if(currentTime >= 60){
            min = String((parseFloat(currentTime)/60).toFixed(2)).replace(".",":");
            formatedTime = `${min}`;
        }

        return formatedTime;
    }

    function videoTimeEnd(timeEnd){
        let timeFull = (parseInt(timeEnd)/60).toFixed(2);
        let timeFormated = String(timeFull).replace(".",":");
        return timeFormated;
    }

    function randomNumber(){
        let geradorNumber = Math.floor(Math.random() * (10 - 1)+1);

        if(arrRandom.length===0){
            arrRandom.push(geradorNumber);

        } else if(arrRandom.length <= 6) {
            while(arrRandom.indexOf(geradorNumber) !== -1){
                geradorNumber = Math.floor(Math.random() * (10 - 1)+1);
            }
            arrRandom.push(geradorNumber);
        }

        if(arrRandom.length > 6){
            arrRandom.splice(6);
        }

        arrRandom.forEach((val,ind)=>{
            if(ind === indice && indice <= 6){
                result = val;
            }
        });

        indice++;

        if(indice > 6){
            indice--;
        }
        // console.log(result);
        return result;
    }

    function indiceRandom(arr){
        let indiceRandom = Math.floor(Math.random() * arr.length);
        let result = arr[indiceRandom];
        return result;
    }

    function menuVideo(events,elements,video_menu_container){
        events.forEach((event)=>{

            elements.forEach((element)=>{
                element.addEventListener(event.mouseover,()=>{
                    if(video_menu_container.classList.contains("hidden_menu")){
                        video_menu_container.classList.remove("hidden_menu");
                        video_menu_container.classList.add("visible_menu");
                    }
                });
            });

            elements.forEach((element)=>{
                element.addEventListener(event.mouseout,()=>{
                    if(!video_menu_container.classList.contains("hidden_menu")){
                        video_menu_container.classList.add("hidden_menu");
                        video_menu_container.classList.remove("visible_menu");
                    }
                });
            });

        });
    }

    function playerVideoFirstPart(menuFirst,video){
        menuFirst.forEach((icon_play,ind_play)=>{
            // console.log(icon_play);
            if(ind_play !== 0){
                icon_play.classList.add("video_timeup");
            }
            
            switch(ind_play){
                case 0:
                    icon_play.addEventListener("click",()=>{
                        // console.log(icon_play);
                        if(video.paused){
                            video.play();
                            icon_play.setAttribute("class","bi bi-pause");
                        } else {
                            video.pause();
                            icon_play.setAttribute("class","bi bi-play");
                        }
                    });
                    video.addEventListener("click",()=>{
                        // console.log(icon_play);
                        if(video.paused){
                            video.play();
                            icon_play.setAttribute("class","bi bi-pause");
                        } else {
                            video.pause();
                            icon_play.setAttribute("class","bi bi-play");
                        }
                    });
                    
                    break;
                case 1:
                    video.addEventListener("timeupdate",(event)=>{
                        icon_play.innerHTML = videoTimeCurrent(parseInt(video.currentTime));
                        
                    });
                    break;
                case 3:
                    video.addEventListener("loadedmetadata",()=>{
                        icon_play.innerHTML = videoTimeEnd(video.duration);
                    });
                    break;
            }
        });
    }

    function playerVideoLastPart(menuLast,vol_range,video,fullscreen,video_menu_container,article_box_second,container_video){
        menuLast.forEach((itens,ind_itens)=>{
            // console.log(itens);
            switch (ind_itens) {
                case 0: //icon and input
                    vol_range.addEventListener("input",()=>{
                        let range_value = parseInt(vol_range.value);
                        let calc = parseFloat(range_value/100);
                        // console.log(calc);

                        video.volume = calc;

                        if(range_value === 0){
                            itens.setAttribute("class","bi bi-volume-mute");
                        } else if(range_value > 0 && range_value < 20){
                            itens.setAttribute("class","bi bi-volume-off");
                        } else if(range_value >= 20 && range_value < 60){
                            itens.setAttribute("class","bi bi-volume-down");
                        } else {
                            itens.setAttribute("class","bi bi-volume-up");
                        }
                    });
                    break;

                case 1: //full
                    itens.addEventListener("click",()=>{
                        if(fullscreen.classList.contains("fullscreen_window_hidden")){
                            fullscreen.classList.add("fullscreen_window_visible");
                            fullscreen.classList.remove("fullscreen_window_hidden");
                            fullscreen.appendChild(container_video);
                            video_menu_container.classList.add("menu_fullscreen");   
                        } else {
                            fullscreen.classList.remove("fullscreen_window_visible");
                            fullscreen.classList.add("fullscreen_window_hidden");
                            article_box_second.appendChild(container_video);
                            video_menu_container.classList.remove("menu_fullscreen");
                        }
                    });
                    break;
            }
        });
    }

    function maxLengthWords(texts){
        let value = texts;

        if(value.length > 233){
            value = value.substr(0,233);
            value = `${value}..."`;
        }

        return value;
    }

    function myMousePosition(event){
        let pointerX = -1;
        // let pointerY = -1;

        pointerX = event.pageX;
        // pointerY = event.pageY;

        return pointerX;
        // console.log(pointerX +" - "+ pointerY);
    }

    function lastLetter(value){
        return value = value.substr(value.length-1); 
    }


    function elementRegardingTop(element){ //regarding = Em relação
        return (parseInt((element.getBoundingClientRect().top))<=380) ? true : false;
    } 
}