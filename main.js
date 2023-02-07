// tady je místo pro náš program
//let nadpis = document.querySelector("h1");
//let vstupUzivatel = prompt("Zadej nový nadpis");//vždy string
//nadpis.innerHTML = vstupUzivatel;

//let vysledek = document.querySelector(".vysledekZavodu")
//const start = 15;
//let delka = Number(prompt("Zadej délku závodu"));//provedeme konverzi string na číslo
//String - převod čísla na text
//let konec = (start + delka) % 24;//modulo zbytek po dělení
//vysledek.innerHTML = konec;

let jmeno = prompt("Zadej jméno");
let prijmeni = prompt("Zadej příjmení");
let rokNarozeni = Number(prompt("Zadej rok narození"));
let vek = 2023-rokNarozeni;
let vysledekSpojeniVseho = jmeno +" " +prijmeni+ " "+ vek +" let";
let vysledek = document.querySelector(".vysledekSpojeni");
vysledek.innerHTML = vysledekSpojeniVseho;

let oblibenaBarva = prompt("Zadej Oblíbenou barvu anglicky");
vysledek.style.backgroundColor = oblibenaBarva;


let hodinovaSazba = Number(prompt("Zadej hodinovou sazbu v korunách"));
let pocetHodin = Number(prompt("Zadej počet odpracovaných hodin za den"));
let pocetDni = Number(prompt("Zadej počet dní v měsíci"));
let hrubaMzda = hodinovaSazba*pocetHodin*pocetDni;
let vypocet = document.querySelector(".vypocetHrubeMzdy");
vypocet.innerHTML = "Tvoje hrubá mzda je "+hrubaMzda + " Kč";

