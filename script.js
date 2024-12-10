function muunnaLampotila() {
    const syote = document.getElementById("lampotila").value;
    const tulosElementti = document.getElementById("tulos");
    const desimaali = document.querySelector('input[name="desimaali"]:checked');
    const muuntoTyyppi = document.getElementById("muunto").value;


    if (syote === "" || isNaN(syote)) {
        tulosElementti.textContent = "Anna kelvollinen lämpötila!";
        return;
    }

    const lampotila = parseFloat(syote);


    if (lampotila < -273.15) {
        tulosElementti.textContent = "Lämpötila ei voi olla pienempi kuin absoluuttinen nollapiste (-273,15 °C).";
        return;
    }

    let muunnettu;
    if (muuntoTyyppi === "Celsius -> Fahrenheit") {
        muunnettu = lampotila * 9 / 5 + 32;
    } else if (muuntoTyyppi === "Fahrenheit -> Celsius") {
        muunnettu = (lampotila - 32) * 5 / 9;
    } else {
        tulosElementti.textContent = "Valitse muuntotyyppi.";
        return;
    }


    const desimaaliMaara = desimaali ? parseInt(desimaali.value) : 1;
    muunnettu = muunnettu.toFixed(desimaaliMaara);

    
    tulosElementti.textContent = `Muunnettu lämpötila: ${muunnettu}`;
}
