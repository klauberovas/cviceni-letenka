// Letenka
// Vypište informace o letu.
// Vytvořte webovou stránku s JavaScriptem a do kódu vašeho programu vložte následující objekt představující reálná data o letu z Prahy do Barcelony.

const flight = {
  id: '145c01af48dd00002715248e_0',
  dTimeUTC: '01/26/2021 @ 1:25pm (UTC)',
  aTimeUTC: '01/26/2021 @ 3:45pm (UTC)',
  duration: {
    departure: 8400,
    return: 0,
    total: 8400,
  },
  fly_duration: '2h 20m',
  flyFrom: 'PRG',
  cityFrom: 'Prague',
  cityCodeFrom: 'PRG',
  countryFrom: {
    code: 'CZ',
    name: 'Czechia',
  },
  flyTo: 'BCN',
  cityTo: 'Barcelona',
  cityCodeTo: 'BCN',
  countryTo: {
    code: 'ES',
    name: 'Spain',
  },
  distance: 1359.54,
  airline: 'FR',
  pnr_count: 1,
  technical_stops: 0,
  price: 36,
  bags_price: {
    1: 34.95,
    2: 69.91,
  },
  baglimit: {
    hand_width: 20,
    hand_height: 40,
    hand_length: 55,
    hand_weight: 10,
    hold_width: 81,
    hold_height: 119,
    hold_length: 119,
    hold_dimensions_sum: 319,
    hold_weight: 20,
  },
  availability: {
    seats: 2,
  },
  conversion: {
    EUR: 36,
  },
  quality: 66.66659,
};
// Proveďte následující:

// Vypište do stránky název startovní a cílové země.
const fly = document.getElementsByClassName('flight__info');

fly[0].innerHTML +=
  '<p><span>From</span>: ' +
  flight.cityFrom +
  ', ' +
  flight.cityCodeFrom +
  '</p>' +
  '<p><span>To</span>: ' +
  flight.cityTo +
  ', ' +
  flight.cityCodeTo +
  '</p>';
// Uložte do separátní proměnné objekt udávající maximální rozměry zavazadel.
// Z objektu s rozměry zavazadel vytáhněte maximální povolené rozměry příručního zavazadla a vypište tyto rozměry opět jeden po druhém vypište do stránky.
const bagLimitHand =
  '<p><span>Hand bag</span>: ' +
  flight.baglimit.hand_height +
  ' x ' +
  flight.baglimit.hand_length +
  ' x ' +
  flight.baglimit.hand_width +
  ', ' +
  flight.baglimit.hand_weight +
  ' kg.</p>';

const bagLimitHold =
  '<p><span>Checked baggage</span>: ' +
  flight.baglimit.hold_height +
  ' x ' +
  flight.baglimit.hold_length +
  ' x ' +
  flight.baglimit.hold_width +
  ', ' +
  flight.baglimit.hold_weight +
  ' kg.</p>';
fly[0].innerHTML += bagLimitHand + bagLimitHold;

// Vypište do stránky, kolik cestující zaplatí za druhé zavazadlo v českých korunách zaokrouhleno nahoru na celé koruny.
fly[0].innerHTML +=
  '<p><span>For second bag</span>: ' +
  Math.ceil(flight.bags_price[2] * 24.6) +
  ' CZK</p>';

// Pokud máte chuť, malinko stránku nastylujte, aby se uživatel v informacích vyznal.
