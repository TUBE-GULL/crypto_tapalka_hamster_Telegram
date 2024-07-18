{
    const button = document.querySelector('.user-tap-button');
    let reachedZeroEnergy = false;

    function tick() {
        try {
            const energy = document.querySelector('.user-tap-energy > p');
            if (energy) {
                const energyStr = energy.innerText;
                const currEnergy = Number(energyStr.split('/')[0]);
                const maxEnergy = Number(energyStr.split('/')[1]);

                if (!reachedZeroEnergy) {
                    for (let i = 0; i < 2; i++) {
                        button.dispatchEvent(new PointerEvent('pointerup'));
                    }
                }
                if (currEnergy <= 10) {
                    reachedZeroEnergy = true;
                }
                if (currEnergy >= maxEnergy - 10) {
                    reachedZeroEnergy = false;
                }
            }

        } catch (e) {
            console.log(e);
        }

        setTimeout(tick, 100 * Math.random() + 50);
    }

    if (button) {
        tick();
    } else {
        console.log('Button not found');
    }
}
