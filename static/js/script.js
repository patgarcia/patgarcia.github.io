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
    ['1', '2', '3', '4', '5', '6'].forEach(num => {
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