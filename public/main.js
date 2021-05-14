let n = 1;
getPage.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET',`/page${n+1}`)
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status === 200){
            const array = JSON.parse(request.response)
            array.forEach(item => {
                const li = document.createElement('li')
                li.textContent = item.id
                xxx.appendChild(li);
            });
            n += 1
        }
    }
    request.send()
}

getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET','/5.json');
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status === 200){
            console.log(typeof request.response)
            console.log(request.response)
            const bool = JSON.parse(request.response);
            console.log(typeof bool)
            console.log(bool)
            myName.textContent = bool.name
        }
    }
    request.send();
}

getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET','/4.xml');
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status === 200){
            const dom = request.responseXML;
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())
        }
    }
    request.send()
}

getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET','/3.html')
    request.onload = () => {
        const div = document.createElement('div') //创建div标签
        div.innerHTML = request.response //填写div内容
        document.body.appendChild(div) //插到body里面
    }
    request.onerror = () => {

    }
    request.send()
}

getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET','/2.js')
    request.onreadystatechange = () => {
        if(request.readyState === 4){
            if(request.status >= 200 && request.status < 300){ //tp状态码2开头 表示成功
                const script = document.createElement("script")
                script.innerHTML = request.response
                document.body.appendChild(script)
            }else{
                alert('加载JS失败')
            }
        }
    }
    request.send()
}

getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET','/style.css');
    request.onload = () => {
        const style = document.createElement('style') //创建style标签
        style.innerHTML = request.response //填写style内容
        document.head.appendChild(style) //插到head里面
    };
    request.onerror = () => {
        console.log('失败了')
    };
    request.send()
};