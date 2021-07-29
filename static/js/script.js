// mode change
const modeChange = () => {

}

// mode switcher
const switchMode = (switcher, className) => {
    let dm = className;
    if (switcher.classList.contains(dm)) {
        switcher.classList.remove(dm)
        switchRootVars('light')
        switchImgSrc('light')
    } else {
        switcher.classList.add(dm)
        switchRootVars('dark')
        switchImgSrc('dark')
    }
    // TODO: pass window tess explicitly here isntead 
    // of waiting for it to be set on tessellate.js
    window.tess.twoJSChildrenColorNegative();
}


let modeSwitch = document.getElementById('mode-switch')
let switcherNode = document.getElementById('switcher')
let modeCheckBox = document.getElementById('mode-checkbox')
modeSwitch.addEventListener('click', e => {
    switchMode(switcher, 'darkmode');
    modeCheckBox.checked = !modeCheckBox.checked;
});


// root var switcher
const switchRootVars = (mode) => {
    const colors = "royugscabvma";
    const numbers = "123456";
    const colorsNum = (colors+numbers).split('');
    colorsNum.forEach(num => {
        let d = getComputedStyle(document.documentElement).getPropertyValue(`--${mode}-${num}`);
        document.documentElement.style.setProperty(`--color-${num}`, d);
    })
}

// img switcher
const switchImgSrc = (mode) => {
    imgArray = Array.from(document.getElementsByClassName('mode-tag'))
    imgArray.forEach(img => {
        img.src = img.dataset[mode]
    });
}

// scroll to object
const scrollToObject = (e) => {
    document.querySelector(`#${e.dataset.href}`).scrollIntoView({
        behavior: 'smooth'
    });
}

// Copyright ending dataset
const dateTxt = document.body.querySelector('footer span');
const dateTxtArray = dateTxt.innerText.split('-');
const currentYear = (new Date).getFullYear();
dateTxt.innerText = `${dateTxtArray[0]}-${currentYear} ${dateTxtArray[1]}`;