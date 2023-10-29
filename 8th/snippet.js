// ! -------------- fetch/then --------------
fetch('/now').then(function (res) {
                if (res.ok) {
                    return res.text();
                }else{
                    console.error('Not response');
                }
            }).then(function (data) {
                console.log(data);
            }).catch(function (err) {
                console.log(err);
                alert(err);
            });

// ! -------------- fetch/await --------------
try  {
    // มี await ต้องมี async หน้า function เสมอ
    const res = await fetch('/now');
    if (res.ok) {
        const data = await res.text();
        document.querySelector('h1').innerHTML = data;
    }else{
        throw Error('Conection error');
    }
} catch (err) {
    console.error(err);
    alert(err.message);                
}
