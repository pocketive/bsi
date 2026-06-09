(function () {
  'use strict';

  const AI2XT_IMGS = {
    frame1:       'data:image/png;base64,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',
    frame2:       'data:image/png;base64,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',
    frame3:       'data:image/png;base64,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',
    pocketive:    'data:image/png;base64,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',
    arrowImport:  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABCGlDQ1BJQ0MgUHJvZmlsZQAAeJxjYGA8wQAELAYMDLl5JUVB7k4KEZFRCuwPGBiBEAwSk4sLGHADoKpv1yBqL+viUYcLcKakFicD6Q9ArFIEtBxopAiQLZIOYWuA2EkQtg2IXV5SUAJkB4DYRSFBzkB2CpCtkY7ETkJiJxcUgdT3ANk2uTmlyQh3M/Ck5oUGA2kOIJZhKGYIYnBncAL5H6IkfxEDg8VXBgbmCQixpJkMDNtbGRgkbiHEVBYwMPC3MDBsO48QQ4RJQWJRIliIBYiZ0tIYGD4tZ2DgjWRgEL7AwMAVDQsIHG5TALvNnSEfCNMZchhSgSKeDHkMyQx6QJYRgwGDIYMZAKbWPz9HbOBQAAADQUlEQVR42u2Yz2scdRTAP29+T3Z27aYggocePHjwL+ith4J4EvTiWWnwIoomlAqFXgQFPZQgmmpPelhbNaUaSSFoQKpUUTBUhYhoi0V7KDQ7s5t0M/N9HrY9tOw22Z3vapV5MIeF737f+7w379dAJf+uiI1LXvg40fqDPYoeyA43qoIbKO0rPsef6JbW71nxQtjDi3rg7A7AC8AN7UTACoAWghagxc4xVeXmWbl3AJA7nt2etyDOfz2JK4AKoAKoACqACqACqAAqgAqgAqgAyl3ijL5iiSXXDdX66LNN3f/0Jum1AtcDHboZCkHdgFMw+NSw3dihl/qo6sD/CVDkUN/r8PXJmHML12UkAIBnTiT60IGMzevg3GV7NvmYkXOHW2ByiPfAr6t1Ts6kMnIEbsmLZxNt7MvY7vQV6qALxlzQVQcbZAwEMbQvJbzxeCalcuDUrKLdCDfoGy9y+1Pm68Kdd4n0dbg+FJsxrTktn8R/rHfkzFGfKAoHesy2KBBGEWeOulxZ74iVKvTDSiqfz4ckTZ+imJzxphCSPQFfzIesrWRitYyuLLRlbTGi1nQwudg3PoeppsPaYszKwoaULqPD5LlWQ+9/JGMrM/0qYsnzUV3562LCm09lI9k0litfXq2p3+hieoBTLjHUgBtA3q7xyoHOyPaM1Q9PHxZ8iVBHR+ldAzNWHPCckNOHx3stxwL45UImn73mUWt4GFPi1TEQN3yWXw1Yv5DJPwYA8FUrlW/emyKZdinG6MRFDsm0x7fvx5xvpWNXhdLl5NC7dd23P2OzrbtOalNAfB9cOt/gnUPtUjZYqYdzy3WtPZCSb+08ZRoDfuSQ/Rnz+mOd0vqtDLUfvFTAdoS4cvdurYLnAtshp+bstHUrAJd/7Monx3yiWnATYLBjjSrRVMTZYx6XL3blngEA+G4plS/fCkmawcCkNjkk0w6rbwd8v5Raa+VWV8rl+bb8vBSSNG/fEW6NCT99WuPcfNvqHGJ/qAGe/3BK9z7c5UbW/x0mcG29zvEnU+v6JrLUt2YNvY0Y1wfHhxsbNVqz+SRUTQbg6u9b8tERjyAICMOAxSMOV3/bnEi0JyoHZxp6cKahVPI/lr8BMaIVQ6xEh3gAAAAASUVORK5CYII=',
    arrowExport:  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABCGlDQ1BJQ0MgUHJvZmlsZQAAeJxjYGA8wQAELAYMDLl5JUVB7k4KEZFRCuwPGBiBEAwSk4sLGHADoKpv1yBqL+viUYcLcKakFicD6Q9ArFIEtBxopAiQLZIOYWuA2EkQtg2IXV5SUAJkB4DYRSFBzkB2CpCtkY7ETkJiJxcUgdT3ANk2uTmlyQh3M/Ck5oUGA2kOIJZhKGYIYnBncAL5H6IkfxEDg8VXBgbmCQixpJkMDNtbGRgkbiHEVBYwMPC3MDBsO48QQ4RJQWJRIliIBYiZ0tIYGD4tZ2DgjWRgEL7AwMAVDQsIHG5TALvNnSEfCNMZchhSgSKeDHkMyQx6QJYRgwGDIYMZAKbWPz9HbOBQAAADLUlEQVR42u2ZTWsUWRSGn1tVdleb6sRgUBEyRGdGXERRo0JMI2JGCAyMEhczsxQRXLiJC/Ef6M6NmjjgLAURBWWWYRYKCuJCxJUfCLoRho6apKtvVVfd48KvIPmo7lQ5UetAQS+a997n3HpPn3sa8viGY6SvLMf72iXLNZyshPf1eHJiowYFDyY8GX82rbJYJxPRn1culxu/QEl8BIVWLr+Nw+NqPfX1rCwAxioWKyxNQxSRCCusOn9VMslV+gAXB8uyxasxFQm2EmwFUw3Y7AVcHEzfD6kCnNxRlgNrfaoBOOrTXh0LqoFheK3PyR3pQqR2rgc3lGV0Z8BkEGLNoWoMdLgFjt4tcPVROqZORWTrmpJc3WuwooB4HlEBbMA4LsP/Wtx/6asl8QqNDSiKJqAh82dEAQ2Bogm4MKCWhgeuDHmyvuhTi8FOsCdbQS0W1hVrXBkqy/8KcGqgQ/Z2aV6F4DSRUEfB6xAGu2qcriwOomWAQ71lObLeZ0LHOC2oOBZUteHIujqHej35oibe3d0ml3bHhKFGVOuVQAAlUCgU+POmw60XzZu66dz1dJbkbL9BIo1RiytjCjAKJAo516/o6SxJ5gCjFYdVtkabdEqYBWgDq22fsYqVrQfO7/FkZ/s0kw1JVHGShq3gTSRs7/A5v6c5UycGGNnWLr9315kIpCXTJqlMExr+6K4z0pccIlEef/3Rk7/7Q6aDEFRGPfiHdkOgXCxw+E6Bf54u3G4s+IXeVSW5NigUYk2UVf89S7sR2i7D4xYP/5u/Mi24n7FdNm2iCUWh3i/w+bOYzc6mFQq0iWZ0QBbngctDnvR6PqEB1xKWKWZ9Wn2l5tJzLQgMbPLqXB6a/0duzrVHtnfKsZ9qVLXgqLkzrYAOR1Aqbuo8jNhMRg6CmV1XQcNAl2tz9onLmXuvVWbt9O39rvzgagJZWFCAogXP68vYdb2xNNppQT76I/EJkM7FLOuiknnkADlADpAD5AA5QA6QA+QAOUAO8P0CpPI/cTNTijSmGakD2Ly7+NsJjlR4N4VLazSZCoBvbKaMQzBz4DvzkjzjswCxCH7sABF5fO3xFrI1J77JGcWAAAAAAElFTkSuQmCC',
    dropImage:    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAeKADAAQAAAABAAAAeAAAAAAI4lXuAAAUe0lEQVR4Ae1dCZxUxZmvd/YxMwzDpTCgwAACw6WoKPFADRoP1Bi5Zc2uQcxPw7lqWH+JbXTR6CoMR1xXosmCURhRDgm/qIlgjItEjMBwg06QG2aAObr73fuvN9093T090w1Mv+7XvII3/ape1VdV37/qe1VffVWPGIbBEMflJAccbHMSVqdSDgccDjgccDjgcMDhgMMBhwMOBxwOOBxwOOBwwOGAwwGHAw4H7MgBS/XQ9z/z8URBdN2sq4phMktPwjLGaIiXJFpGHxtMAw/ZBKWIqh/DMkTX9NpaIj29zndHTYLYaQni00K1GaICx9/s9eb/myoFCbG0aTVTIKuC0UwZliVS0B/w+NkXkW1uAkwMXVHlIFGVIGE5HpXmrGJxRvPRVBntmbZoI8CJmqVSydIeHOYyBVeW5CWKZmwgLEScphFiYt0S4IiD/2lxXEv50hyby7hpOkPXmbC0xnId3jGs1yOyz7CC0BYyOi3Fb4mopQAzDGO2XobliWEE17/3q5FvtFS4XHg29OEvhT5dax5H3dtmoj7hxmZ93iwrWp+p9TkWFZ3ywqQiasThtbQQlgJ8oVoYAN8GyWUptA2ZWQtwSERnoJ4ZztLScVVMXS0FOCZnx2MJBxyALWFz5jKxGOAo1U7m6nxB5WzpNCldnP35b/7eU+ONbrpOjJYqpOsqQ5pEiA9QUcxEYYSwrNtQteDxl6cM35WuurQ23fiatDZ9S+gxPHnC68mbIssB5Bc1I4nLnW3QpsSFxnubKi9CWhjCQSHi92tbhk969dbPl/z0eHzKbPTnBMAajPd1Qyf7Dp4hfkkjIfV/6/MbhAN1tYOrampuAPF3Wz+D1qeYEwBj9mUQzETqAyqpDUDvmyaE6cKRAvq6rmdu3nOWbSAnAA7XmeJKwU0XwA20w7md/W8mWoXFo+izZ0oqKRiGzQTvUilaxuPYpgf7/vBlh2Mngvd+e8SvckRetfaFu05FuIf3b7xjsGJl0NUbG9gMxJe9Nf326MEYRBkyeb1dUbvXOV58M6Dyn90yc+1dYUZgMV2Nf+3WHN5FdEUiLO+icjsc9YL7tUUPHvHMek4qzuut6H5YRQSIbrD9GcKuvGnWB7/18PyGM/XydQUGSzCaBoB4B6P3fvPpYqJK9eSSq8eSDr2HE07wYDlWvuB6tC0Apt0OsGl+SSUq1WZAJBuAkeNcDwd18vC3R/2EY+tJUG6cIuV36kkOfrWK7Fj7PCm4+DLS7cofkY69hhNWcBMdFhZAmpLNeWcxwOfxRoCUpQBqsHhhYcBGAaKmMNTVK/QvIA+JYgMWIiUjpqDnXkcOAeQTez8jOz6YQ9p0pkCPJh16XWuKbquBzsSLwmKAKRDn6NDhKLiJXAOu0exDPPwv6jbYvGqO7CKH/rGaHNv1Cdm+5jkA3Y9cctX9pH3JNbALo4Mxqp7MTWcbgCm0On3HRuOYBBNdM7s2AO1L2nTpR7oB1MNb/0iO71pPKlY/SwqLB5DeNz9C8jv1zlmQbQMwxZXa552Lo0Bjrmz2XG9RV1h0CuS7L1eQM4cqSM3hnWa4lqO92DYAA12D4wAw7cpngTM1zaWASrUnyXdfvW+K6uCZo8RdeDEpHjKKdOp7E97l0rm0m7NOQ4tutbMFwB37nzBITQEReTY0wIpiE+3VCZQZYWADp4+QIxV/MkWzXFdFXPntSc8bHiKdB9xm3usAlxq35qqzBcCkHBjeajAeF4/pEIOpEkbM+Ec1Vaa2CgMl2qvDIpyKYwosfd8e3fYnogRriJjXjvS8/l8B7A+Iq6CDOVXSYICf684WAJeW7jBUtkcgP89LBIGDAkMlmuwnwbpqosr+T0tKenUTPAU9jlXXY6UHvRFiee+fF5Lqys0Atoj0uO5B0nng7cRd0PGCATbccM9jYhomkf5fn8+HfVv646dqatYo2NekBGpJ/ekjRwP1px/8+u3pI/r1vHh1r67tiAfgm9LW0IjgbUsuHTaeXDnpN6TH8H8hoqeQ0B5LlSSJHMuL0Ha5k15UOtjJ2aIHU4Y+P3nYX/Hz18Fj5z0GPVYPSQ0u2rNi9jf0mayqgotzhVTOWBqGtqvPLY8R3p1vTn9SEcXHdn5C5PpqUGthBIdHhcUDCSfax2bfNgBTIKnbsmz6woa7xr8YejV6Qnes4AqpJJs8ahqAgVrl/y0l/qoDTZ/FhfS78z8I16ZbXGj2em0HcCJWYq2pabc7m5Ex4pbcOJko/jOJyDeGoSHktb+U1NXXNYZl+V1uAEwH1efpOvQcBuncVBLEkAXAUm0VMc6cPu/8Yuim0ZMTANMFQrollb6E6SAIP2ftUtJHg7Dd5sw5AbDIcR/X1p65Ixj0FyuYQp0LwKm2CAMjdJalE++zd+fQ7s4+k7gU51TQOBope5MIwJTpxEd89qGhy6/5yaJtdWeC9ymqSlhq/og/mBBHokLTGcVflvbEKH8kWsyNaa1JQ+jMCh76wzIco8r6FhpsB2cpwOlkyMbFj+4E/f9MZx52pN3YxO1YeqfMSTngAJyURfaOYCnAiZWE9mZgtpfe4newbSFm+v5wTjtFd3kZTjBUXaurXDnjdLaDS8tnMcDnz5Iuo17ztvcGFmE026FheJuYJgzwdKg/qonB7JRlbcOOFdO/SByz+dDS0a9czQviWKxQXo9xeTcMvXGCCt0Ixda1nbDwW0M3PoGl59t7359BB3hZ6WwHcCfOL7K8MIoXXO3NlSFwns53ml+yZ7DtU9Yun7jwYykozd6xYtY/kiFR8sOXOhW4PS9yPDsB1iACViwakoQn2IZRiIBiaL6u4wVl+qBxZQtrjp76VeV6X9YtMFv6Dk7G2JSfMyRI7azopSlSQJGlOlWR6qMvhAdxJiZIQo+J7o6eeJvH6/modMzLN7WUT5/RrxS38XrWCW7Xg2g4Jrgwzw0oirxdlaUNIPs5juv7VqO0ATziFLjc3tmFF7d7q+voVzwt0c7EM9v14AiTaG+CrkJWtB/Xyf5NLoFHQKNjdZE3GLVY5LWRPMf9FPseiqCBai/yrjd6jZ5/9b7yqScaY4fuRvh4L8+/BulwhQEAoQwJKpJUhj3Hv9+758x+st1nGmJ3uPvXBZ1dwhUwLpjJC/zd1L5a9HjuKwr4Zx8k5JdN6GYwwL4Ah5nGkoOVK2dXhr1xv3vhXz/g/rK1Lo+wBoi140VXd68RmIjweXFxSWmntrfwgnCngS0u6PdBSZEnViyb8V58vJOrn4QJH9mA8E8HjS+bK4quabRB8Cw7teeoFxZ/s+bnB+LTZMpvTxEdxS1s7U/aSCvenfa5qqpl1MidilWOYX4QRSJyK7DsPdRYj8ZTFfmdROBGIjfcGMeq5Kc0RdlP90MJLm9hXp77trg4GfXaHuBUuScpysf0nR1aDepGhr4mNEnLkhJECAUzf2nyPEHAsQ8fr9d17W3s+t+jaeoeQ2foACxrXNLWnzUljS5IGIPosCT3us4pFFzzRY2B91DE39wkTXiYjGVBYqRsl7NF+5uv+4FSUw/evraz9UfKNqlHY4A9AW4sP8Rparv7PQJ7BYbSmMYisUoObN48hQ6xY51hVJprjXR0zLATyAjf78l6X/KNS+XlWiUpN4GtjKWYcd8FIaJ73T6nI8sz0xssKnE8ta7B0rqp01XjPWpnrWsqzHPFmwd3ab+0dHTZJU1j2ifEYoBbP7tgkn0n/X80b1hBUZtVmPr0pVtYFDm4yn+GXZoIoq3ks49URXmbms9SoEVosUSR2zR43IIFA0fPv7Hj6EX5idJlc5ilIrpV4TUHQwbxCsIvhkxYcBiDo5h5MHxuHOLbC3PfoTDnETHSPaxo2pKjWvVzJ9b5Em9GgqgN3H3lFACmQzGCqZQBLRh7Eea6j0Gx8VhXXd9fPH7+RtUgf1E0/W+7y6fvzmZwadksBTgdzIAovYt+8KKJw0CMimRqYmNoanVA0l+qrpFeP/Ghr75J3KiA3ZjjwvvAwHFlf8RHRGZCCzaUthwYfRGDZUswjSoRDGOiqKn+IRMXfqHpxpLjVcHldDQdRSZrbhNwJmvK1nxBovqqqskSVIh+fOwjEHNBp2h+DIPB7kKeb+f18HOLO+ZVDBg376HmCTc+2fbOtD/UVO/6HojfKkvSAsyjt2I6RDUgpoNk8Aq8cJNbFN/o0tH7Wb8xc7/fmDp77uzbg6NUlZIk/d0IqSrdId7CMotjNa2IF7QreY7/MTRUQ3HgYXc35148aGxZ/tZl08qSwbBv3QIqyj8yr1KfOKBv276MoF2PDXAjAfB1EN9Y8NAIz3NDvKx7zYAx8yZXLJ++NBldK5/bE+CoeTBwPrBv5RP7W2Daxi6jfG90zG/3iiCKU7A7jeCdOqff2LI/71w2raKFdLGPoIeu2E62IpBei0rueblbnscYy/PsTLwhOqMc6MzCq6Vj52/bvmxq1hjl2VNER7E+FVXl4TU+v6pWT8VAaSMmzgRjLq/AMimJ6qisYm73r5r13dZ3fvZffiU4Qtc0c7AFuvmgOyMmYoY9tgc4Vf5tL/fJmqYtNk/igVjFYQHXmMtRqRJoJt6uZbP2KKryC/qYGs+j/Xwvm5YNbSeiqZ1MUTPMThYsq8xOnsfbmY66GaZ99xHPuCrXE3OR/rLRv75M5PKvpbbQAOzkzvIZa5PRCz9XZG2LwKsynY5halboJkE6X6aHV4dc1KgwHGTRr+17cKqqSspP9No2Jri4h7ZZqqRKy5DjGfEKGAS86XK7f+cW+Dd73e5rE36W7Jfj8dErc6nKlAmyTtiGA7wiCaMGDZEwa25sD/DZsInnyRhz7xLmtBhr7YvWM6uG/BVOCwgaOLMDOusOroLCO1OljVH6RA72PZQ29C/7vyl/0rKPTyYrY1YBXApVIKYwTw154NWl/UbPG5us8PS5SvS43pIwFTMQG8d5XphE9czUYXnv/eiYu8sDezVNXw+rSfqUEUXxpdKx866KjpPons6rMQV7BN+DoGIfem59OW4y12XjCmnpO1iPyzzey3PqCy5vwaNUD8yxZOLAMXOlbctnrIyPB0EYCeIMctVl983FVNQ83zASrjMGKxC2kDA6dNDsnehhN9J09KgGfNth40m/591IZPPGp6vq/Kc5Xr0BlLwcyxbDDOjDQeMXLFJleYWmqPt2r/7ST0pLuV79RbxnvUM4gXuIZ7kx+DIwQxsG9NybIQT+N5ZuZn2WAtxiVWEPBRE30jzWiAKMHfrYFDoSaWIAZgUv0EWnDemiRUFYIAgU8NiBDPVRFSa10KBxqdqSAeSw1PhaVdRJh9dM9ceXZ3v51E0DxpU94hLE/8G72o0Na21dLv4pnN70pOESDw0Zf/1pZCNgJN6BZdhOdMuqOXLmRKKq8h41oE0KqTrjSZv+xmaZ8HFaAi0W0S304fU+rKcam+n5znTVx8RPI5via60rfroa76E9MXxxSIMBbMxFn4XGPRDHWALUtQM4iniOLEu3bC+fuS+ebthf8c60JUHJfwd2KX4BAmYw3smQ7uKl+Hr5YEFw9ed50QSXPtcNRoZV51s1tcHvV2ShfXT29GCgq6jBmUaQ8XMs3wfi7oNtx0+9FWZ8+FcVDEnVtIV6wN8WRze03CkM4scKwUHN0HfW1vu/PrB29qkwnZZ+ty+f9Qm5/Wc3DirscxswvBswX46eexFanQegqvilCxL/hEz4XFK0lbvKpzU1DkmQQayMSRAhDUHZBDDZXv7EUdTxJy3V82D5zMBBQp5uKU6rPIMeGjrJ1aCFy8d2v7ewDWx03Tw+jeXn5XqqHWuVfNJMJKsATnNdz4O8T69cSaiOxXbO4ndwdHbR97bjm20KbCmXYzNrYcBlG/Zlf0FjeZ7m8jqQppnBCchb+g42YOrUMAWCfTI+nZKgPE5QK3PAUoB1SZ9fT+owKsWJsQqDQeqF4jIxQWrgraUAlz87chuypZfjLOKAIyYtYnSmsrG0Bw8eN/9yWDh2w9ePiCYpO1pSGWaKIbmWr6U9GKs0jwuie5VbzMNOA2F8rjEzG+tjaQ+GPlcNH/qJgwGdWZMFLcLSHmxBfZws4jjgABzHkFzzOgDnGqJx9XEAjmNIrnkdgHMN0bj6WAowtvBGRs44sztikxxXppzyqh7ePNohU5VqtWlSr3vnl7jdxkUMNswmrAxyopu0GoytqGEpUzJw/NxrG03PkYqeoWGeTtdwL9XKB/Z8MPMQpTfKt8ZLaomXFz2J6dNIGXQ4DC9G4RwuZ70qt8GHlrC5ODOFazWAsdPOJ7g8DzR8VTtxZSgH6FFG1OFLopM5Ikw2YPQY40y7ZPp1Ohxyk6/TPT/P0ede1vPvYifPoziuMEOsiillU09eXtMwhHjoFxUZowM1/MtEwVsNYHx2XYCxHJCJSOFIhcNN29xtH7KTo7sAqFVi+B0RW3l6dAI+REkaDzlD/LawauwUkQAR6tlxE1v+6DKFTHZpfXUtvjlHR0zLfasBjBNq/qmw0m5DU2LqGhbYOJoKJyCQYtgqm3t+sLPgJFp1zHmRaOloCw3NAeaoWDI2jkdqrRs1iixX4ZAU0A9lgQSR50lvwlHDzS1pgoYIcWd/pJgqNhr92g+KCtPsUyrB1iULXasBvOXYqaeIp+qXCcu+F6E4/XfI4PZvCpwwgcaRlMDCrdtOPU+kqkaO945ODU/gdGSA4q+ve1mtC/43L6hGUHaH0YpOELqvpx+YbOF5giQJgjSFfo36PBz2F1KhrcnBEJ08ohiyPsy1qSpmz8x5ZJFK0lYDOLSRq8WRMTNkfgQwiHQlfHprpKDNmqPDdvXFe6gtMr1s7dZZXPrwK9CabKP7VWuIPmtKbetcrAXY1qyyZ+EdgO2JW8qldgBOmVX2jOgAbE/cUi51642iU8gS8wXzmAMaFdPc85uGpJCfE8Xisyo1w6hmNPUIGM8YmrkF08EgzRywtAcfrZJnuwT/07rqYnipyBbbL9PMf4e8wwGHAw4HHA44HHA44HDA4YDDAYcDDgccDljNAWfZzmqOW5ifwfw/v8lHCA2ACEkAAAAASUVORK5CYII=',
  };
  if (document.getElementById('ai2xmltool-panel')) return;

  function findBlockly() {
    const checked = new Set();

    function probe(win, path) {
      try {
        if (!win || checked.has(win)) return null;
        checked.add(win);

        const B = win.Blockly;
        if (!B) {
          for (let i = 0; i < (win.frames || []).length; i++) {
            const r = probe(win.frames[i], `${path}.frames[${i}]`);
            if (r) return r;
          }
          return null;
        }

        if (B.activeFormWorkspace) {
          console.log('[AI2 XML] Using Blockly.activeFormWorkspace at', path);
          return { Blockly: B, workspace: B.activeFormWorkspace };
        }
        if (B.allWorkspaces) {
          const keys = Object.keys(B.allWorkspaces);
          if (keys.length > 0) {
            const ws = B.allWorkspaces[keys[keys.length - 1]];
            if (ws) return { Blockly: B, workspace: ws };
          }
        }
        if (B.mainWorkspace) return { Blockly: B, workspace: B.mainWorkspace };
        const wsMap = B.WorkspaceMap || B.workspaces;
        if (wsMap) {
          const ids = Object.keys(wsMap);
          if (ids.length > 0) return { Blockly: B, workspace: wsMap[ids[0]] };
        }
        if (typeof B.getMainWorkspace === 'function') {
          const ws = B.getMainWorkspace();
          if (ws) return { Blockly: B, workspace: ws };
        }
        for (let i = 0; i < (win.frames || []).length; i++) {
          const r = probe(win.frames[i], `${path}.frames[${i}]`);
          if (r) return r;
        }
      } catch (e) {
        console.log('[AI2 XML] Cross-origin block at', path, ':', e.message);
      }
      return null;
    }

    return probe(window.top, 'top') || probe(window, 'self');
  }

  function getWorkspace() {
    const result = findBlockly();
    if (!result) console.warn('[AI2 XML] Could not find workspace. Switch to Blocks tab first.');
    return result;
  }

  function workspaceToText(Blockly, workspace) {
    if (Blockly.Xml && typeof Blockly.Xml.workspaceToDom === 'function') {
      const dom = Blockly.Xml.workspaceToDom(workspace);

      if (typeof Blockly.Xml.domToPrettyText === 'function') {
        return Blockly.Xml.domToPrettyText(dom);
      }
      return new XMLSerializer().serializeToString(dom);
    }
    if (Blockly.serialization && Blockly.serialization.workspaces) {
      const state = Blockly.serialization.workspaces.save(workspace);
      return JSON.stringify(state, null, 2);
    }
    throw new Error('No serializer found on Blockly object.');
  }

  function preprocessAI2Dom(dom, workspace, B) {

    function isValueReturningMethod(typeName, methodName) {
      try {

        const ct = B && B.ComponentTypes;
        if (ct && ct.getTypeObjectForClassName) {
          const typeObj = ct.getTypeObjectForClassName(typeName);
          if (typeObj && typeObj.getMethodObjectForName) {
            const methodObj = typeObj.getMethodObjectForName(methodName);
            const ret = methodObj && !!methodObj.returnType;
            console.log('[AI2 XML] isValueReturningMethod CT:', typeName, methodName, ret, !!methodObj, methodObj && methodObj.returnType);
            if (methodObj) return ret;
          } else {
            console.log('[AI2 XML] isValueReturningMethod no typeObj/methodName for:', typeName, methodName, !!typeObj, typeObj && typeof typeObj.getMethodObjectForName);
          }
        } else {
          console.log('[AI2 XML] isValueReturningMethod Blockly.ComponentTypes unavailable:', !!B, B && typeof B.ComponentTypes);
        }
        if (workspace && workspace.getComponentDatabase) {
          const db = workspace.getComponentDatabase();
          if (db && db.getMethodForType) {
            const methodInfo = db.getMethodForType(typeName, methodName);
            const ret = methodInfo && !!methodInfo.returnType;
            console.log('[AI2 XML] isValueReturningMethod DB:', typeName, methodName, ret, !!methodInfo);
            if (methodInfo) return ret;
          } else {
            console.log('[AI2 XML] isValueReturningMethod DB getMethodForType unavailable');
          }
        } else {
          console.log('[AI2 XML] isValueReturningMethod workspace DB unavailable');
        }
      } catch (e) {
        console.log('[AI2 XML] isValueReturningMethod error:', e);
      }
      console.log('[AI2 XML] isValueReturningMethod returning false for:', typeName, methodName);
      return false;
    }

    function getField(el, name) {
      for (const c of el.childNodes) {
        if (c.nodeType === 1 && c.tagName === 'field' && c.getAttribute('name') === name)
          return c.textContent.trim();
      }
      return null;
    }

    function removeField(el, name) {
      Array.from(el.childNodes)
        .filter(c => c.nodeType === 1 && c.tagName === 'field' && c.getAttribute('name') === name)
        .forEach(c => el.removeChild(c));
    }

    function removeMutation(el) {
      Array.from(el.childNodes)
        .filter(c => c.nodeType === 1 && c.tagName === 'mutation')
        .forEach(c => el.removeChild(c));
    }

    function setField(el, name, value, doc) {
      removeField(el, name);
      const f = doc.createElement('field');
      f.setAttribute('name', name);
      f.textContent = value;

      const first = Array.from(el.childNodes).find(
        c => c.nodeType === 1 && c.tagName !== 'mutation'
      );
      if (first) el.insertBefore(f, first);
      else el.appendChild(f);
    }

    function parseExprToBlock(expr, doc) {
      expr = expr.trim();

      const binOps = [
        [' or ',  'logic_or',       null,    'A', 'B'],
        [' and ', 'logic_and',      null,    'A', 'B'],
        [' >= ',  'math_compare',   'GTE',   'A', 'B'],
        [' <= ',  'math_compare',   'LTE',   'A', 'B'],
        [' != ',  'math_compare',   'NEQ',   'A', 'B'],
        [' = ',   'math_compare',   'EQ',    'A', 'B'],
        [' > ',   'math_compare',   'GT',    'A', 'B'],
        [' < ',   'math_compare',   'LT',    'A', 'B'],
        [' + ',   'math_add',       null,    'A', 'B'],
        [' - ',   'math_subtract',  null,    'A', 'B'],
        [' * ',   'math_multiply',  null,    'A', 'B'],
        [' / ',   'math_divide',    null,    'A', 'B'],
        [' ^ ',   'math_power',     null,    'A', 'B'],
      ];

      function findOp(s, op) {
        let depth = 0, inStr = false, sc = '';
        for (let i = 0; i <= s.length - op.length; i++) {
          const c = s[i];
          if (inStr) { if (c === sc) inStr = false; continue; }
          if (c === '"' || c === "'") { inStr = true; sc = c; continue; }
          if (c === '(' || c === '[') { depth++; continue; }
          if (c === ')' || c === ']') { depth--; continue; }
          if (depth === 0 && s.slice(i, i + op.length) === op) return i;
        }
        return -1;
      }

      function makeBlock(type, children) {

        const b = doc.createElement('block');
        b.setAttribute('type', type);
        b.setAttribute('id', Math.random().toString(36).slice(2, 10));
        for (const c of children) {
          if (c instanceof Element || (c && c.nodeType)) { b.appendChild(c); continue; }
          const el = doc.createElement(c.tag);
          if (c.attrs) for (const [k,v] of Object.entries(c.attrs)) el.setAttribute(k, v);
          if (c.text !== undefined) el.textContent = c.text;
          if (c.children) for (const ch of c.children) el.appendChild(ch);
          b.appendChild(el);
        }
        return b;
      }

      function makeValue(name, innerBlock) {
        const v = doc.createElement('value');
        v.setAttribute('name', name);
        v.appendChild(innerBlock);
        return v;
      }

      function makeField(name, text) {
        const f = doc.createElement('field');
        f.setAttribute('name', name);
        f.textContent = text;
        return f;
      }

      for (const [op, type, opVal, la, lb] of binOps) {
        const idx = findOp(expr, op);
        if (idx !== -1) {
          const left  = parseExprToBlock(expr.slice(0, idx).trim(), doc);
          const right = parseExprToBlock(expr.slice(idx + op.length).trim(), doc);
          if (!left || !right) continue;
          const b = doc.createElement('block');
          b.setAttribute('type', type);
          b.setAttribute('id', Math.random().toString(36).slice(2, 10));
          if (opVal) b.appendChild(makeField('OP', opVal));
          b.appendChild(makeValue(la, left));
          b.appendChild(makeValue(lb, right));
          return b;
        }
      }

      if (/^-?\d+(\.\d+)?$/.test(expr)) {
        const b = doc.createElement('block');
        b.setAttribute('type', 'math_number');
        b.setAttribute('id', Math.random().toString(36).slice(2, 10));
        b.appendChild(makeField('NUM', expr));
        return b;
      }

      if ((expr.startsWith('"') && expr.endsWith('"')) || (expr.startsWith("'") && expr.endsWith("'"))) {
        const b = doc.createElement('block');
        b.setAttribute('type', 'text');
        b.setAttribute('id', Math.random().toString(36).slice(2, 10));
        b.appendChild(makeField('TEXT', expr.slice(1, -1)));
        return b;
      }

      if (expr === 'true' || expr === 'false') {
        const b = doc.createElement('block');
        b.setAttribute('type', 'logic_boolean');
        b.setAttribute('id', Math.random().toString(36).slice(2, 10));
        b.appendChild(makeField('BOOL', expr === 'true' ? 'TRUE' : 'FALSE'));
        return b;
      }

      const b = doc.createElement('block');
      b.setAttribute('type', 'lexical_variable_get');
      b.setAttribute('id', Math.random().toString(36).slice(2, 10));
      b.appendChild(makeField('VAR', expr));
      return b;
    }

    function walkBlock(blockEl) {
      const doc = blockEl.ownerDocument;
      const type = blockEl.getAttribute('type');

      if (type === 'math_arithmetic') {
        const op = getField(blockEl, 'OP') || 'ADD';
        const opToType = { ADD:'math_add', MINUS:'math_subtract', MULTIPLY:'math_multiply', DIVIDE:'math_divide', POWER:'math_power' };
        const newType = opToType[op] || 'math_add';
        blockEl.setAttribute('type', newType);
        removeMutation(blockEl);
        removeField(blockEl, 'OP');

      }

      else if (type === 'logic_compare') {
        const op = getField(blockEl, 'OP') || 'EQ';
        blockEl.setAttribute('type', 'math_compare');
        removeMutation(blockEl);

        Array.from(blockEl.childNodes)
          .filter(c => c.nodeType === 1 && c.tagName === 'field' && c.getAttribute('name') === 'OP')
          .forEach(c => c.setAttribute('name', 'OP'));

      }

      else if (type === 'logic_operation') {
        const op = getField(blockEl, 'OP') || 'AND';
        blockEl.setAttribute('type', op === 'OR' ? 'logic_or' : 'logic_and');
        removeMutation(blockEl);
        removeField(blockEl, 'OP');

      }

      else if (type === 'logic_boolean' || type === 'logic_true' || type === 'logic_false') {
        blockEl.setAttribute('type', 'logic_boolean');
        removeMutation(blockEl);

        const existing = getField(blockEl, 'BOOL');
        if (!existing) {

          setField(blockEl, 'BOOL', type === 'logic_false' ? 'FALSE' : 'TRUE', doc);
        }
      }

      else if (type === 'component_method' || type === 'component_set_get' || type === 'component_event') {
        const mut = Array.from(blockEl.childNodes).find(
          c => c.nodeType === 1 && c.tagName === 'mutation'
        );
        if (mut) {
          const compType = mut.getAttribute('component_type') || '';
          const classGuess = compType.replace(/\d+$/, '') || compType;
          if (classGuess !== compType) {
            mut.setAttribute('component_type', classGuess);
          }

          if (type === 'component_method' && !mut.hasAttribute('shape')) {
            let shape = 'statement';
            const parent = blockEl.parentNode;
            if (parent && parent.nodeType === 1 && parent.tagName === 'value') {
              shape = 'value';
            }
            mut.setAttribute('shape', shape);
          }
        }
      }

      else if (type === 'logic_negate') {
        removeMutation(blockEl);
      }

      else if (type === 'lexical_variable_get' || type === 'lexical_variable_set') {
        const varField = getField(blockEl, 'VAR');
        if (varField && /[+\-*\/>=<!]/.test(varField.replace('global ', ''))) {

          const exprBlock = parseExprToBlock(varField.trim(), doc);
          if (exprBlock) {

            const parent = blockEl.parentNode;
            if (parent) {
              parent.insertBefore(exprBlock, blockEl);
              parent.removeChild(blockEl);

              walkBlock(exprBlock);
              return;
            }
          }
        }
      }

      else if (type === 'math_on_list') {
        const op = getField(blockEl, 'OP') || 'MIN';
        blockEl.setAttribute('type', op === 'MAX' ? 'math_max' : 'math_min');
        removeField(blockEl, 'OP');

        const listValue = Array.from(blockEl.childNodes).find(
          c => c.nodeType === 1 && c.tagName === 'value' && c.getAttribute('name') === 'LIST'
        );
        if (listValue) {
          const listBlock = Array.from(listValue.childNodes).find(c => c.nodeType === 1 && c.tagName === 'block');
          if (listBlock && listBlock.getAttribute('type') === 'lists_create_with') {

            const addValues = Array.from(listBlock.childNodes).filter(
              c => c.nodeType === 1 && c.tagName === 'value' && c.getAttribute('name').startsWith('ADD')
            );
            blockEl.removeChild(listValue);
            addValues.forEach((v, i) => {
              v.setAttribute('name', 'NUM' + i);
              blockEl.appendChild(v);
            });
          }
        }

        removeMutation(blockEl);
        const numValues = Array.from(blockEl.childNodes).filter(
          c => c.nodeType === 1 && c.tagName === 'value' && c.getAttribute('name').startsWith('NUM')
        ).length;
        const mut = doc.createElement('mutation');
        mut.setAttribute('items', String(numValues || 2));
        blockEl.insertBefore(mut, blockEl.firstChild);
      }

      const CONTAINERS = new Set(['value', 'statement', 'next']);
      Array.from(blockEl.childNodes)
        .filter(c => c.nodeType === 1 && CONTAINERS.has(c.tagName))
        .forEach(container => {
          Array.from(container.childNodes)
            .filter(c => c.nodeType === 1 && (c.tagName === 'block' || c.tagName === 'shadow'))
            .forEach(walkBlock);
        });

      if (type === 'component_method') {
        const mutEl = Array.from(blockEl.childNodes).find(
          c => c.nodeType === 1 && c.tagName === 'mutation'
        );
        if (mutEl && mutEl.getAttribute('shape') === 'statement') {
          const compType = mutEl.getAttribute('component_type') || '';
          const methodName = mutEl.getAttribute('method_name') || '';
          const needsWrap = compType && methodName && isValueReturningMethod(compType, methodName);
          console.log('[AI2 XML] wrapping check:', type, compType, methodName, needsWrap, !!mutEl.parentNode);
          if (needsWrap) {

            const nextChild = Array.from(blockEl.childNodes).find(
              c => c.nodeType === 1 && c.tagName === 'next'
            );
            if (nextChild) blockEl.removeChild(nextChild);

            mutEl.setAttribute('shape', 'value');

            const wrapper = doc.createElement('block');
            wrapper.setAttribute('type', 'lexical_variable_set');
            wrapper.setAttribute('id', uid());
            const varField = doc.createElement('field');
            varField.setAttribute('name', 'VAR');
            varField.textContent = 'global __discard__';
            wrapper.appendChild(varField);
            const valueEl = doc.createElement('value');
            valueEl.setAttribute('name', 'VALUE');

            const parent = blockEl.parentNode;
            parent.replaceChild(wrapper, blockEl);
            valueEl.appendChild(blockEl);
            wrapper.appendChild(valueEl);

            if (nextChild) wrapper.appendChild(nextChild);

            console.log('[AI2 XML] Wrapped', compType, methodName, 'in lexical_variable_set');
            return;
          }
        }
      }
    }

    Array.from(dom.childNodes)
      .filter(n => n.nodeType === 1 && (n.tagName === 'block' || n.tagName === 'shadow'))
      .forEach(walkBlock);

    return dom;
  }

  function textToWorkspace(Blockly, workspace, text) {
    const trimmed = text.trim();

    if (trimmed.startsWith('<')) {
      if (!Blockly.Xml) throw new Error('Blockly.Xml not available for XML import.');

      let dom;
      try {
        const parsed = new DOMParser().parseFromString(trimmed, 'text/xml');
        const parseErr = parsed.querySelector('parsererror');
        if (parseErr) throw new Error(parseErr.textContent.split('\n')[0]);
        dom = parsed.documentElement;
      } catch (e) { throw new Error('Invalid XML: ' + e.message); }

      preprocessAI2Dom(dom, workspace, Blockly);

      try {
        const debugXml = new XMLSerializer().serializeToString(dom);
        console.log('[BSI] Preprocessed XML:\n', debugXml);
      } catch(e) {}

      const blockNodes = Array.from(dom.childNodes).filter(
        n => n.nodeType === 1 && (n.tagName === 'block' || n.localName === 'block')
      );

      if (blockNodes.length === 0) {

        Blockly.Xml.domToWorkspace(dom, workspace);
        return '?';
      }

      let offsetX = 20, offsetY = 20;
      let imported = 0;
      const errors = [];

      blockNodes.forEach((blockNode, idx) => {
        try {
          const wrapper = dom.ownerDocument.createElement('xml');
          const clone = blockNode.cloneNode(true);
          if (!clone.hasAttribute('x')) clone.setAttribute('x', String(offsetX));
          if (!clone.hasAttribute('y')) clone.setAttribute('y', String(offsetY));
          wrapper.appendChild(clone);
          Blockly.Xml.domToWorkspace(wrapper, workspace);
          imported++;
          offsetX += 340;
          if (offsetX > 1200) { offsetX = 20; offsetY += 320; }
        } catch (e) {

          const blockType = blockNode.getAttribute('type') || 'unknown';
          const msg = `Block ${idx + 1} (${blockType}): ${e.message}`;
          errors.push(msg);
          console.warn('[BSI] Skipped block:', msg, blockNode);
        }
      });

      if (errors.length > 0) {
        console.error('[BSI] Import completed with errors:\n' + errors.join('\n'));

        throw new Error(`${imported} of ${blockNodes.length} blocks imported. Failed blocks:\n` + errors.join('\n'));
      }

      return imported;
    }

    if (trimmed.startsWith('{')) {
      if (!Blockly.serialization || !Blockly.serialization.workspaces) {
        throw new Error('Blockly.serialization API not available. Use XML format instead.');
      }
      let state;
      try { state = JSON.parse(trimmed); }
      catch (e) { throw new Error('Invalid JSON: ' + e.message); }

      const blockCount = (state.blocks && state.blocks.blocks)
        ? state.blocks.blocks.length : '?';
      Blockly.serialization.workspaces.load(state, workspace);
      return blockCount;
    }

    throw new Error('Unrecognised format — paste XML starting with <xml> or JSON starting with {');
  }

  function uid() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    for (let i = 0; i < 8; i++) id += chars[Math.floor(Math.random() * chars.length)];
    return id;
  }

  function esc(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
  }

  function guessComponentClass(instanceName) {
    return instanceName.replace(/\d+$/, '') || instanceName;
  }

  function parseBS(src) {
    const lines = src.split('\n');
    const tokens = tokenizeLines(lines);
    const ast = buildAST(tokens);
    const xmlBlocks = [];
    let x = 20, y = 20;

    for (const node of ast) {
      let xml = null;
      if (node.type === 'global_set') {
        xml = globalDeclXML(node, x, y);
      } else if (node.type === 'event') {
        if (!node.component) {
          console.warn('[BSI] Skipping event with no component name: when .' + node.event + ' ->');
          if (node.children && node.children.length > 0) {
            for (const child of node.children) {
              const childXml = stmtBlockXML(child, 0);
              if (childXml) {
                xmlBlocks.push(childXml);
                x += 340;
                if (x > 1200) { x = 20; y += 320; }
              }
            }
          }
          continue;
        }
        xml = eventXML(node, x, y);
      } else if (node.type === 'def' || node.type === 'def_return') {
        xml = defXML(node, x, y);
      }
      if (xml) {
        xmlBlocks.push(xml);
        x += 340;
        if (x > 1200) { x = 20; y += 320; }
      }
    }

    return `<xml xmlns="http://www.w3.org/1999/xhtml">\n${xmlBlocks.join('\n')}\n</xml>`;
  }

  function tokenizeLines(lines) {
    const result = [];
    for (let i = 0; i < lines.length; i++) {
      const raw = lines[i];
      const expanded = raw.replace(/\t/g, '    ');
      const content = expanded.trimEnd();
      if (!content || content.trimStart().startsWith('#')) continue;
      const indent = content.length - content.trimStart().length;
      const text = content.trimStart().replace(/\s+#.*$/, '').trimEnd();
      if (!text) continue;
      result.push({ indent, text, line: i + 1 });
    }
    return result;
  }

  function buildAST(tokens) {
    const nodes = [];
    let i = 0;
    while (i < tokens.length) {
      const tok = tokens[i];
      const node = parseLine(tok.text, tok.line);
      const children = [];
      const baseIndent = tok.indent;
      i++;
      while (i < tokens.length && tokens[i].indent > baseIndent) {
        children.push(tokens[i]);
        i++;
      }
      if (children.length > 0) node.children = buildAST(children);
      nodes.push(node);
    }
    return nodes;
  }

  function parseParams(str) {
    if (!str || !str.trim()) return [];
    return str.split(',').map(s => s.trim()).filter(Boolean);
  }

  function parseArgs(str) {
    if (!str || !str.trim()) return [];
    const args = [];
    let depth = 0, cur = '', inStr = false, strChar = '';
    for (let i = 0; i < str.length; i++) {
      const c = str[i];
      if (inStr) { cur += c; if (c === strChar) inStr = false; }
      else if (c === '"' || c === "'") { inStr = true; strChar = c; cur += c; }
      else if (c === '(' || c === '[') { depth++; cur += c; }
      else if (c === ')' || c === ']') { depth--; cur += c; }
      else if (c === ',' && depth === 0) { args.push(cur.trim()); cur = ''; }
      else cur += c;
    }
    if (cur.trim()) args.push(cur.trim());
    return args;
  }

  function extractBalancedArgs(str) {
    let depth = 0, inStr = false, strChar = '';
    for (let i = 0; i < str.length; i++) {
      const c = str[i];
      if (inStr) { if (c === strChar && str[i - 1] !== '\\') inStr = false; continue; }
      if (c === '"' || c === "'") { inStr = true; strChar = c; continue; }
      if (c === '(' || c === '[') depth++;
      else if (c === ')' || c === ']') {
        if (depth === 0) return str.slice(0, i).trim();
        depth--;
      }
    }
    return null;
  }

  function parseLine(text, lineNum) {
    const whenM = text.match(/^when\s+(\w*)\.(\w+)(?:\(([^)]*)\))?\s*->$/);
    if (whenM) return { type: 'event', component: whenM[1] || '', event: whenM[2], params: parseParams(whenM[3] || ''), line: lineNum };

    const defRetM = text.match(/^def\s+(\w+)\(([^)]*)\)\s*->\s*return\s+(.+)$/);
    if (defRetM) return { type: 'def_return', name: defRetM[1], params: parseParams(defRetM[2]), returnExpr: defRetM[3].trim(), line: lineNum };

    const defM = text.match(/^def\s+(\w+)\(([^)]*)\)\s*->$/);
    if (defM) return { type: 'def', name: defM[1], params: parseParams(defM[2]), line: lineNum };

    const retM = text.match(/^return\s+(.+)$/);
    if (retM) return { type: 'return', expr: retM[1].trim(), line: lineNum };

    const ifM = text.match(/^if\s+(.+?)\s*->$/);
    if (ifM) return { type: 'if', condition: ifM[1].trim(), line: lineNum };

    const elifM = text.match(/^else\s+if\s+(.+?)\s*->$/);
    if (elifM) return { type: 'elseif', condition: elifM[1].trim(), line: lineNum };

    if (text === 'else ->') return { type: 'else', line: lineNum };

    const whileM = text.match(/^while\s+(.+?)\s*->$/);
    if (whileM) return { type: 'while', condition: whileM[1].trim(), line: lineNum };

    const forEachM = text.match(/^foreach\s+(\w+)\s+in\s+(.+?)\s*->$/);
    if (forEachM) return { type: 'foreach', varName: forEachM[1], list: forEachM[2].trim(), line: lineNum };

    const forM = text.match(/^for\s+(\w+)\s+from\s+(.+?)\s+to\s+(.+?)(?:\s+by\s+(.+?))?\s*->$/);
    if (forM) return { type: 'for', varName: forM[1], from: forM[2].trim(), to: forM[3].trim(), by: (forM[4] || '1').trim(), line: lineNum };

    const callM = text.match(/^call\s+(\w+)\.(\w+)\((.*)$/);
    if (callM) {
      const argsStr = extractBalancedArgs(callM[3]);
      if (argsStr !== null) return { type: 'call_void', component: callM[1], method: callM[2], args: parseArgs(argsStr), line: lineNum };
    }

    const callProcM = text.match(/^call\s+(\w+)\((.*)$/);
    if (callProcM) {
      const argsStr = extractBalancedArgs(callProcM[2]);
      if (argsStr !== null) return { type: 'call_proc', name: callProcM[1], args: parseArgs(argsStr), line: lineNum };
    }

    const assignCallCompM = text.match(/^(global\s+\w+|\w+)\s*->\s*call\s+(\w+)\.(\w+)\((.*)$/);
    if (assignCallCompM) {
      const argsStr = extractBalancedArgs(assignCallCompM[4]);
      if (argsStr !== null) return { type: 'assign_call', varStr: assignCallCompM[1].trim(), component: assignCallCompM[2], method: assignCallCompM[3], args: parseArgs(argsStr), line: lineNum };
    }

    const assignCallProcM = text.match(/^(global\s+\w+|\w+)\s*->\s*call\s+(\w+)\((.*)$/);
    if (assignCallProcM) {
      const argsStr = extractBalancedArgs(assignCallProcM[3]);
      if (argsStr !== null) return { type: 'assign_call_proc', varStr: assignCallProcM[1].trim(), name: assignCallProcM[2], args: parseArgs(argsStr), line: lineNum };
    }

    const propSetM = text.match(/^(\w+)\.(\w+)\s*->\s*(.+)$/);
    if (propSetM) return { type: 'prop_set', component: propSetM[1], prop: propSetM[2], expr: propSetM[3].trim(), line: lineNum };

    const globalSetM = text.match(/^global\s+(\w+)\s*->\s*(.+)$/);
    if (globalSetM) return { type: 'global_set', name: globalSetM[1], expr: globalSetM[2].trim(), line: lineNum };

    const localSetM = text.match(/^(\w+)\s*->\s*(.+)$/);
    if (localSetM) return { type: 'local_set', name: localSetM[1], expr: localSetM[2].trim(), line: lineNum };

    return { type: 'unknown', text, line: lineNum };
  }

  function groupIfElse(nodes) {
    const result = [];
    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];
      if (n.type === 'if') {
        const ifNode = { ...n, elseifs: [], elseBody: null };
        let j = i + 1;
        while (j < nodes.length && (nodes[j].type === 'elseif' || nodes[j].type === 'else')) {
          if (nodes[j].type === 'elseif') ifNode.elseifs.push(nodes[j]);
          else ifNode.elseBody = nodes[j];
          j++;
        }
        i = j - 1;
        result.push(ifNode);
      } else if (n.type === 'elseif' || n.type === 'else') {

      } else {
        result.push(n);
      }
    }
    return result;
  }

  function indent(xml, spaces) {
    const pad = ' '.repeat(spaces);
    return xml.split('\n').map(l => pad + l).join('\n');
  }

  function stmtChainXML(nodes, indentLevel) {
    if (!nodes || nodes.length === 0) return '';
    const grouped = groupIfElse(nodes);
    if (grouped.length === 0) return '';

    function renderChain(idx) {
      if (idx >= grouped.length) return '';
      const node = grouped[idx];
      const blockXml = stmtBlockXML(node, indentLevel);
      if (!blockXml) return renderChain(idx + 1);
      const nextXml = renderChain(idx + 1);
      if (!nextXml) return blockXml;
      const closeIdx = blockXml.lastIndexOf('</block>');
      if (closeIdx === -1) return blockXml;
      const pad = ' '.repeat(indentLevel + 2);
      return blockXml.slice(0, closeIdx)
        + `${pad}<next>\n${indent(nextXml, indentLevel + 4)}\n${pad}</next>\n`
        + blockXml.slice(closeIdx);
    }

    return renderChain(0);
  }

  function globalDeclXML(node, x, y) {
    return `<block type="global_declaration" id="${uid()}" x="${x}" y="${y}">
  <field name="NAME">${esc(node.name)}</field>
  <value name="VALUE">
${indent(exprXML(node.expr), 4)}
  </value>
</block>`;
  }

  function eventXML(node, x, y) {
    let body = '';
    if (node.children && node.children.length > 0) {
      const chain = stmtChainXML(node.children, 2);
      if (chain) {
        body = `  <statement name="DO">\n${indent(chain, 4)}\n  </statement>\n`;
      }
    }
    const argTags = (node.params && node.params.length > 0)
      ? node.params.map(p => `<arg name="${esc(p)}"></arg>`).join('')
      : '';
    return `<block type="component_event" id="${uid()}" x="${x}" y="${y}">
  <mutation component_type="${esc(guessComponentClass(node.component))}" is_generic="false" instance_name="${esc(node.component)}" event_name="${esc(node.event)}">${argTags}</mutation>
  <field name="COMPONENT_SELECTOR">${esc(node.component)}</field>
${body}</block>`;
  }

  function defXML(node, x, y) {
    const isReturn = node.type === 'def_return';
    const blockType = isReturn ? 'procedures_defreturn' : 'procedures_defnoreturn';
    let mutationParts = '';
    if (node.params && node.params.length > 0) {
      mutationParts = node.params.map(p => `<arg name="${esc(p)}"></arg>`).join('');
    }

    let body = '';
    if (node.children && node.children.length > 0) {
      const chain = stmtChainXML(node.children, 2);
      if (chain) {
        body += `  <statement name="STACK">\n${indent(chain, 4)}\n  </statement>\n`;
      }
    }
    if (isReturn && node.returnExpr) {
      body += `  <value name="RETURN">\n${indent(exprXML(node.returnExpr), 4)}\n  </value>\n`;
    }

    const mutation = mutationParts
      ? `  <mutation>${mutationParts}</mutation>\n`
      : '';

    return `<block type="${blockType}" id="${uid()}" x="${x}" y="${y}">
${mutation}  <field name="NAME">${esc(node.name)}</field>
${body}</block>`;
  }

  function stmtBlockXML(node, il) {
    switch (node.type) {

      case 'prop_set': return `<block type="component_set_get" id="${uid()}">
  <mutation component_type="${esc(guessComponentClass(node.component))}" set_or_get="set" property_name="${esc(node.prop)}" is_generic="false" instance_name="${esc(node.component)}"></mutation>
  <field name="COMPONENT_SELECTOR">${esc(node.component)}</field>
  <field name="PROP">${esc(node.prop)}</field>
  <value name="VALUE">
${indent(exprXML(node.expr), 4)}
  </value>
</block>`;

      case 'call_void': {
        const argsXml = node.args.map((a, i) =>
          `  <value name="ARG${i}">\n${indent(exprXML(a), 4)}\n  </value>`
        ).join('\n');
        return `<block type="component_method" id="${uid()}">
  <mutation component_type="${esc(guessComponentClass(node.component))}" method_name="${esc(node.method)}" is_generic="false" instance_name="${esc(node.component)}" shape="statement"></mutation>
  <field name="COMPONENT_SELECTOR">${esc(node.component)}</field>
${argsXml ? argsXml + '\n' : ''}</block>`;
      }

      case 'call_proc': {
        const argsXml = node.args.map((a, i) =>
          `  <value name="ARG${i}">\n${indent(exprXML(a), 4)}\n  </value>`
        ).join('\n');
        return `<block type="procedures_callnoreturn" id="${uid()}">
  <mutation name="${esc(node.name)}"></mutation>
  <field name="PROCNAME">${esc(node.name)}</field>
${argsXml ? argsXml + '\n' : ''}</block>`;
      }

      case 'assign_call':
      case 'assign_call_proc': {
        const isGlobal = node.varStr.startsWith('global ');
        const varName = node.varStr;
        let callXml;
        if (node.type === 'assign_call') {
          const argsXml = node.args.map((a, i) =>
            `    <value name="ARG${i}">\n${indent(exprXML(a), 6)}\n    </value>`
          ).join('\n');
          callXml = `<block type="component_method" id="${uid()}">
    <mutation component_type="${esc(guessComponentClass(node.component))}" method_name="${esc(node.method)}" is_generic="false" instance_name="${esc(node.component)}" shape="value"></mutation>
    <field name="COMPONENT_SELECTOR">${esc(node.component)}</field>
${argsXml ? argsXml + '\n' : ''}  </block>`;
        } else {
          const argsXml = node.args.map((a, i) =>
            `    <value name="ARG${i}">\n${indent(exprXML(a), 6)}\n    </value>`
          ).join('\n');
          callXml = `<block type="procedures_callreturn" id="${uid()}">
    <mutation name="${esc(node.name)}"></mutation>
    <field name="PROCNAME">${esc(node.name)}</field>
${argsXml ? argsXml + '\n' : ''}  </block>`;
        }
        return `<block type="lexical_variable_set" id="${uid()}">
  <field name="VAR">${esc(varName)}</field>
  <value name="VALUE">
${indent(callXml, 4)}
  </value>
</block>`;
      }

      case 'global_set': return `<block type="lexical_variable_set" id="${uid()}">
  <field name="VAR">global ${esc(node.name)}</field>
  <value name="VALUE">
${indent(exprXML(node.expr), 4)}
  </value>
</block>`;

      case 'local_set': return `<block type="lexical_variable_set" id="${uid()}">
  <field name="VAR">${esc(node.name)}</field>
  <value name="VALUE">
${indent(exprXML(node.expr), 4)}
  </value>
</block>`;

      case 'if': {
        const hasElse = !!node.elseBody;
        const elseifCount = node.elseifs ? node.elseifs.length : 0;
        let mutation = '';
        if (elseifCount > 0 || hasElse) {
          mutation = `  <mutation elseif="${elseifCount}" else="${hasElse ? 1 : 0}"></mutation>\n`;
        }
        let body = `  <value name="IF0">\n${indent(exprXML(node.condition), 4)}\n  </value>\n`;
        if (node.children && node.children.length > 0) {
          const chain = stmtChainXML(node.children, 2);
          if (chain) body += `  <statement name="DO0">\n${indent(chain, 4)}\n  </statement>\n`;
        }
        if (node.elseifs) {
          node.elseifs.forEach((ei, idx) => {
            body += `  <value name="IF${idx + 1}">\n${indent(exprXML(ei.condition), 4)}\n  </value>\n`;
            if (ei.children && ei.children.length > 0) {
              const chain = stmtChainXML(ei.children, 2);
              if (chain) body += `  <statement name="DO${idx + 1}">\n${indent(chain, 4)}\n  </statement>\n`;
            }
          });
        }
        if (hasElse && node.elseBody && node.elseBody.children && node.elseBody.children.length > 0) {
          const chain = stmtChainXML(node.elseBody.children, 2);
          if (chain) body += `  <statement name="ELSE">\n${indent(chain, 4)}\n  </statement>\n`;
        }
        return `<block type="controls_if" id="${uid()}">\n${mutation}${body}</block>`;
      }

      case 'while': {
        let body = `  <value name="BOOL">\n${indent(exprXML(node.condition), 4)}\n  </value>\n`;
        if (node.children && node.children.length > 0) {
          const chain = stmtChainXML(node.children, 2);
          if (chain) body += `  <statement name="DO">\n${indent(chain, 4)}\n  </statement>\n`;
        }
        return `<block type="controls_while" id="${uid()}">\n${body}</block>`;
      }

      case 'foreach': {
        let body = `  <field name="VAR">${esc(node.varName)}</field>\n`;
        body += `  <value name="LIST">\n${indent(exprXML(node.list), 4)}\n  </value>\n`;
        if (node.children && node.children.length > 0) {
          const chain = stmtChainXML(node.children, 2);
          if (chain) body += `  <statement name="DO">\n${indent(chain, 4)}\n  </statement>\n`;
        }
        return `<block type="controls_forEach" id="${uid()}">\n${body}</block>`;
      }

      case 'for': {
        let body = `  <field name="VAR">${esc(node.varName)}</field>\n`;
        body += `  <value name="START">\n${indent(exprXML(node.from), 4)}\n  </value>\n`;
        body += `  <value name="END">\n${indent(exprXML(node.to), 4)}\n  </value>\n`;
        body += `  <value name="STEP">\n${indent(exprXML(node.by), 4)}\n  </value>\n`;
        if (node.children && node.children.length > 0) {
          const chain = stmtChainXML(node.children, 2);
          if (chain) body += `  <statement name="DO">\n${indent(chain, 4)}\n  </statement>\n`;
        }
        return `<block type="controls_forRange" id="${uid()}">\n${body}</block>`;
      }

      default:
        return `<block type="text" id="${uid()}">\n  <field name="TEXT">${esc(node.text || node.type)}</field>\n</block>`;
    }
  }

  function exprXML(expr) {
    if (expr === undefined || expr === null) return `<block type="text" id="${uid()}"><field name="TEXT"></field></block>`;
    const s = String(expr).trim();

    if ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'"))) {
      return `<block type="text" id="${uid()}"><field name="TEXT">${esc(s.slice(1, -1))}</field></block>`;
    }
    if (/^-?\d+(\.\d+)?$/.test(s)) {
      return `<block type="math_number" id="${uid()}"><field name="NUM">${esc(s)}</field></block>`;
    }
    if (s === 'true')  return `<block type="logic_boolean" id="${uid()}"><field name="BOOL">TRUE</field></block>`;
    if (s === 'false') return `<block type="logic_boolean" id="${uid()}"><field name="BOOL">FALSE</field></block>`;

    if (s === '[]') {
      return `<block type="lists_create_with" id="${uid()}">
  <mutation items="0"></mutation>
</block>`;
    }

    if (s.startsWith('[') && s.endsWith(']')) {
      const items = parseArgs(s.slice(1, -1));
      const itemsXml = items.map((item, i) =>
        `  <value name="ADD${i}">\n${indent(exprXML(item), 4)}\n  </value>`
      ).join('\n');
      return `<block type="lists_create_with" id="${uid()}">\n${itemsXml}\n</block>`;
    }

    const joinM = s.match(/^join\((.+)\)$/);
    if (joinM) {
      const args = parseArgs(joinM[1]);
      const itemsXml = args.map((a, i) =>
        `  <value name="ADD${i}">\n${indent(exprXML(a), 4)}\n  </value>`
      ).join('\n');
      return `<block type="text_join" id="${uid()}">\n${itemsXml}\n</block>`;
    }

    const lenM = s.match(/^length\((.+)\)$/);
    if (lenM) return `<block type="text_length" id="${uid()}">\n  <value name="VALUE">\n${indent(exprXML(lenM[1]), 4)}\n  </value>\n</block>`;

    const notM = s.match(/^not\s+(.+)$/);
    if (notM) return `<block type="logic_negate" id="${uid()}">\n  <value name="BOOL">\n${indent(exprXML(notM[1]), 4)}\n  </value>\n</block>`;

    const mathSingleFns = { abs: 'ABS', sqrt: 'ROOT', log: 'LOG' };
    for (const [fn, op] of Object.entries(mathSingleFns)) {
      const m = s.match(new RegExp(`^${fn}\\((.+)\\)$`, 'i'));
      if (m) return `<block type="math_single" id="${uid()}">\n  <field name="OP">${op}</field>\n  <value name="NUM">\n${indent(exprXML(m[1]), 4)}\n  </value>\n</block>`;
    }
    const mathRoundFns = { floor: ['math_floor','FLOOR'], ceiling: ['math_ceiling','CEILING'], round: ['math_round','ROUND'] };
    for (const [fn, [btype, op]] of Object.entries(mathRoundFns)) {
      const m = s.match(new RegExp(`^${fn}\\((.+)\\)$`, 'i'));
      if (m) return `<block type="${btype}" id="${uid()}">\n  <field name="OP">${op}</field>\n  <value name="NUM">\n${indent(exprXML(m[1]), 4)}\n  </value>\n</block>`;
    }
    const mathTrigFns = { sin: 'SIN', cos: 'COS', tan: 'TAN' };
    for (const [fn, op] of Object.entries(mathTrigFns)) {
      const m = s.match(new RegExp(`^${fn}\\((.+)\\)$`, 'i'));
      if (m) return `<block type="math_trig" id="${uid()}">\n  <field name="OP">${op}</field>\n  <value name="NUM">\n${indent(exprXML(m[1]), 4)}\n  </value>\n</block>`;
    }

    const minMaxM = s.match(/^(min|max)\((.+)\)$/i);
    if (minMaxM) {
      const args = parseArgs(minMaxM[2]);
      const numInputs = args.map((a, i) =>
        `  <value name="NUM${i}">\n${indent(exprXML(a), 4)}\n  </value>`
      ).join('\n');
      return `<block type="math_on_list" id="${uid()}">\n  <field name="OP">${minMaxM[1].toUpperCase()}</field>\n${numInputs}\n</block>`;
    }

    if (s === 'random()') return `<block type="math_random_float" id="${uid()}"></block>`;
    const randIntM = s.match(/^randomInt\((.+?),\s*(.+)\)$/);
    if (randIntM) return `<block type="math_random_int" id="${uid()}">\n  <value name="FROM">\n${indent(exprXML(randIntM[1]), 4)}\n  </value>\n  <value name="TO">\n${indent(exprXML(randIntM[2]), 4)}\n  </value>\n</block>`;

    const callCompM = s.match(/^call\s+(\w+)\.(\w+)\((.*)$/);
    if (callCompM) {
      const argsStr = extractBalancedArgs(callCompM[3]);
      if (argsStr !== null) {
        const args = parseArgs(argsStr);
        const argsXml = args.map((a, i) =>
          `  <value name="ARG${i}">\n${indent(exprXML(a), 4)}\n  </value>`
        ).join('\n');
        return `<block type="component_method" id="${uid()}">\n  <mutation component_type="${esc(guessComponentClass(callCompM[1]))}" method_name="${esc(callCompM[2])}" is_generic="false" instance_name="${esc(callCompM[1])}" shape="value"></mutation>\n  <field name="COMPONENT_SELECTOR">${esc(callCompM[1])}</field>\n${argsXml ? argsXml + '\n' : ''}</block>`;
      }
    }

    const callProcExprM = s.match(/^call\s+(\w+)\((.*)$/);
    if (callProcExprM) {
      const argsStr = extractBalancedArgs(callProcExprM[2]);
      if (argsStr !== null) {
        const args = parseArgs(argsStr);
        const argsXml = args.map((a, i) =>
          `  <value name="ARG${i}">\n${indent(exprXML(a), 4)}\n  </value>`
        ).join('\n');
        return `<block type="procedures_callreturn" id="${uid()}">\n  <mutation name="${esc(callProcExprM[1])}"></mutation>\n  <field name="PROCNAME">${esc(callProcExprM[1])}</field>\n${argsXml ? argsXml + '\n' : ''}</block>`;
      }
    }

    const propGetM = s.match(/^(\w+)\.(\w+)$/);
    if (propGetM) {
      const instanceName = propGetM[1];
      const className = guessComponentClass(instanceName);
      return `<block type="component_set_get" id="${uid()}">\n  <mutation component_type="${esc(className)}" set_or_get="get" property_name="${esc(propGetM[2])}" is_generic="false" instance_name="${esc(instanceName)}"></mutation>\n  <field name="COMPONENT_SELECTOR">${esc(instanceName)}</field>\n  <field name="PROP">${esc(propGetM[2])}</field>\n</block>`;
    }

    const textCompOps = [
      { op: ' OP=CONTAINS ', type: 'text_contains', A: 'TEXT1', B: 'TEXT2' },
      { op: ' OP=EQUAL ',    type: 'text_compare',  val: 'EQ',  A: 'TEXT1', B: 'TEXT2' },
      { op: ' OP=NEQ ',      type: 'text_compare',  val: 'NEQ', A: 'TEXT1', B: 'TEXT2' },
      { op: ' OP=LT ',       type: 'text_compare',  val: 'LT',  A: 'TEXT1', B: 'TEXT2' },
      { op: ' OP=LTE ',      type: 'text_compare',  val: 'LTE', A: 'TEXT1', B: 'TEXT2' },
      { op: ' OP=GT ',       type: 'text_compare',  val: 'GT',  A: 'TEXT1', B: 'TEXT2' },
      { op: ' OP=GTE ',      type: 'text_compare',  val: 'GTE', A: 'TEXT1', B: 'TEXT2' },
    ];
    for (const def of textCompOps) {
      const idx = findBinOp(s, def.op);
      if (idx !== -1) {
        const left = s.slice(0, idx).trim();
        const right = s.slice(idx + def.op.length).trim();
        return `<block type="${def.type}" id="${uid()}">\n  <field name="OP">${def.val || 'EQ'}</field>\n  <value name="${def.A}">\n${indent(exprXML(left), 4)}\n  </value>\n  <value name="${def.B}">\n${indent(exprXML(right), 4)}\n  </value>\n</block>`;
      }
    }

    const textOps = [
      { op: ' contains ',   type: 'text_contains', val: 'CONTAINS',   A: 'TEXT1', B: 'TEXT2' },
      { op: ' starts_at ',  type: 'text_compare',  val: 'STARTS_AT',  A: 'TEXT1', B: 'TEXT2' },
      { op: ' ends_at ',    type: 'text_compare',  val: 'ENDS_AT',    A: 'TEXT1', B: 'TEXT2' },
    ];
    for (const def of textOps) {
      const idx = findBinOp(s, def.op);
      if (idx !== -1) {
        const left = s.slice(0, idx).trim();
        const right = s.slice(idx + def.op.length).trim();
        return `<block type="${def.type}" id="${uid()}">\n  <field name="OP">${def.val}</field>\n  <value name="${def.A}">\n${indent(exprXML(left), 4)}\n  </value>\n  <value name="${def.B}">\n${indent(exprXML(right), 4)}\n  </value>\n</block>`;
      }
    }
    const binOps = [
      { op: ' or ',  type: 'logic_or',       field: 'OP', val: 'OR',  A: 'A',    B: 'B',    mut: true  },
      { op: ' and ', type: 'logic_operation', field: 'OP', val: 'AND', A: 'A',    B: 'B',    mut: true  },
      { op: ' >= ',  type: 'logic_compare',   field: 'OP', val: 'GTE', A: 'A',    B: 'B',    mut: false },
      { op: ' <= ',  type: 'logic_compare',   field: 'OP', val: 'LTE', A: 'A',    B: 'B',    mut: false },
      { op: ' != ',  type: 'logic_compare',   field: 'OP', val: 'NEQ', A: 'A',    B: 'B',    mut: false },
      { op: ' = ',   type: 'logic_compare',   field: 'OP', val: 'EQ',  A: 'A',    B: 'B',    mut: false },
      { op: ' > ',   type: 'logic_compare',   field: 'OP', val: 'GT',  A: 'A',    B: 'B',    mut: false },
      { op: ' < ',   type: 'logic_compare',   field: 'OP', val: 'LT',  A: 'A',    B: 'B',    mut: false },
      { op: ' + ',   type: 'math_add',        field: null,  val: null,  A: 'NUM0', B: 'NUM1', mut: true  },
      { op: ' - ',   type: 'math_subtract',   field: null,  val: null,  A: 'A',    B: 'B',    mut: false },
      { op: ' * ',   type: 'math_multiply',   field: null,  val: null,  A: 'NUM0', B: 'NUM1', mut: true  },
      { op: ' / ',   type: 'math_division',   field: null,  val: null,  A: 'A',    B: 'B',    mut: false },
      { op: ' ^ ',   type: 'math_power',      field: null,  val: null,  A: 'A',    B: 'B',    mut: false },
    ];
    for (const def of binOps) {
      const idx = findBinOp(s, def.op);
      if (idx !== -1) {
        const left = s.slice(0, idx).trim();
        const right = s.slice(idx + def.op.length).trim();
        const fieldXml = def.field ? `  <field name="${def.field}">${def.val}</field>\n` : '';
        return `<block type="${def.type}" id="${uid()}">\n${fieldXml}  <value name="${def.A}">\n${indent(exprXML(left), 4)}\n  </value>\n  <value name="${def.B}">\n${indent(exprXML(right), 4)}\n  </value>\n</block>`;
      }
    }

    if (s.startsWith('global ')) {
      return `<block type="lexical_variable_get" id="${uid()}"><field name="VAR">${esc(s)}</field></block>`;
    }

    if (/^\w+$/.test(s)) return `<block type="lexical_variable_get" id="${uid()}"><field name="VAR">${esc(s)}</field></block>`;

    return `<block type="text" id="${uid()}"><field name="TEXT">${esc(s)}</field></block>`;
  }

  function findBinOp(s, op) {
    const inString = new Array(s.length).fill(false);
    let inStr = false, strChar = '';
    for (let i = 0; i < s.length; i++) {
      if (inStr) {
        inString[i] = true;
        if (s[i] === strChar) inStr = false;
      } else if (s[i] === '"' || s[i] === "'") {
        inStr = true; strChar = s[i]; inString[i] = true;
      }
    }

    let depth = 0;
    for (let i = s.length - op.length; i >= 0; i--) {
      if (inString[i]) continue;
      const c = s[i];
      if (c === ')' || c === ']') { depth++; continue; }
      if (c === '(' || c === '[') { depth--; continue; }
      if (depth === 0 && s.slice(i, i + op.length) === op) return i;
    }
    return -1;
  }

  function getField(blockEl, name) {
    for (const c of blockEl.childNodes) {
      if (c.nodeType === 1 && c.tagName === 'field' && c.getAttribute('name') === name)
        return c.textContent.trim();
    }
    return null;
  }

  function getChildBlock(blockEl, containerName) {
    for (const c of blockEl.childNodes) {
      if (c.nodeType === 1 && (c.tagName === 'value' || c.tagName === 'statement') && c.getAttribute('name') === containerName) {
        for (const child of c.childNodes) {
          if (child.nodeType === 1 && (child.tagName === 'block' || child.tagName === 'shadow'))
            return child;
        }
      }
    }
    return null;
  }

  function getArgNames(blockEl) {
    for (const c of blockEl.childNodes) {
      if (c.nodeType === 1 && c.tagName === 'mutation') {
        return Array.from(c.childNodes)
          .filter(n => n.nodeType === 1 && n.tagName === 'arg')
          .map(n => n.getAttribute('name') || '');
      }
    }
    return [];
  }

  function getMutation(blockEl, attr) {
    for (const c of blockEl.childNodes) {
      if (c.nodeType === 1 && c.tagName === 'mutation')
        return c.getAttribute(attr);
    }
    return null;
  }

  function getArgsList(blockEl) {
    const args = [];
    let i = 0;
    while (true) {
      const child = getChildBlock(blockEl, 'ARG' + i);
      if (!child) break;
      args.push(exprToBS(child));
      i++;
    }
    return args;
  }

  function exprToBS(blockEl) {
    if (!blockEl) return '';
    const type = blockEl.getAttribute('type');

    switch (type) {
      case 'text':
        return '"' + (getField(blockEl, 'TEXT') || '') + '"';
      case 'math_number':
        return getField(blockEl, 'NUM') || '0';
      case 'logic_boolean':
        return (getField(blockEl, 'BOOL') === 'TRUE') ? 'true' : 'false';
      case 'lexical_variable_get':
        return getField(blockEl, 'VAR') || '';
      case 'logic_negate': {
        const child = getChildBlock(blockEl, 'BOOL');
        return 'not ' + exprToBS(child);
      }
      case 'logic_or':
      case 'logic_and':
      case 'math_compare':
      case 'math_add':
      case 'math_subtract':
      case 'math_multiply':
      case 'math_division':
      case 'math_power': {
        const binOpMap = {
          'logic_or': ' or ',
          'logic_and': ' and ',
          'math_add': ' + ',
          'math_subtract': ' - ',
          'math_multiply': ' * ',
          'math_division': ' / ',
          'math_power': ' ^ ',
        };
        const compareOpMap = { 'EQ': ' = ', 'NEQ': ' != ', 'LT': ' < ', 'LTE': ' <= ', 'GT': ' > ', 'GTE': ' >= ' };
        let opStr = binOpMap[type];
        let leftName = 'A', rightName = 'B';
        if (type === 'logic_or' || type === 'logic_and') { leftName = 'A'; rightName = 'B'; }
        else if (type === 'math_add') { leftName = 'NUM0'; rightName = 'NUM1'; }
        else if (type === 'math_multiply') { leftName = 'NUM0'; rightName = 'NUM1'; }
        else if (type === 'math_compare') {
          const opVal = getField(blockEl, 'OP');
          opStr = compareOpMap[opVal] || ' = ';
        }
        const left = getChildBlock(blockEl, leftName);
        const right = getChildBlock(blockEl, rightName);
        return exprToBS(left) + opStr + exprToBS(right);
      }
      case 'component_set_get': {
        const sog = getMutation(blockEl, 'set_or_get');
        if (sog === 'get') {
          const comp = getField(blockEl, 'COMPONENT_SELECTOR') || '';
          const prop = getField(blockEl, 'PROP') || '';
          return comp + '.' + prop;
        }
        return '';
      }
      case 'component_method': {
        const comp = getField(blockEl, 'COMPONENT_SELECTOR') || '';
        const method = getMutation(blockEl, 'method_name') || '';
        const args = getArgsList(blockEl);
        return 'call ' + comp + '.' + method + '(' + args.join(', ') + ')';
      }
      case 'procedures_callreturn': {
        const name = getField(blockEl, 'PROCNAME') || getMutation(blockEl, 'name') || '';
        const args = getArgsList(blockEl);
        return 'call ' + name + '(' + args.join(', ') + ')';
      }
      case 'text_join': {
        const args = [];
        let i = 0;
        while (true) {
          const child = getChildBlock(blockEl, 'ADD' + i);
          if (!child) break;
          args.push(exprToBS(child));
          i++;
        }
        return 'join(' + args.join(', ') + ')';
      }
      case 'text_length': {
        const child = getChildBlock(blockEl, 'VALUE');
        return 'length(' + exprToBS(child) + ')';
      }
      case 'math_single': {
        const op = getField(blockEl, 'OP') || '';
        const child = getChildBlock(blockEl, 'NUM');
        const fnMap = { 'ABS': 'abs', 'ROOT': 'sqrt', 'LOG': 'log' };
        const fn = fnMap[op] || op.toLowerCase();
        return fn + '(' + exprToBS(child) + ')';
      }
      case 'math_floor':
      case 'math_ceiling':
      case 'math_round': {
        const child = getChildBlock(blockEl, 'NUM');
        const fn = type.replace('math_', '');
        return fn + '(' + exprToBS(child) + ')';
      }
      case 'math_trig': {
        const op = getField(blockEl, 'OP') || '';
        const child = getChildBlock(blockEl, 'NUM');
        return op.toLowerCase() + '(' + exprToBS(child) + ')';
      }
      case 'math_random_float':
        return 'random()';
      case 'math_random_int': {
        const from = getChildBlock(blockEl, 'FROM');
        const to = getChildBlock(blockEl, 'TO');
        return 'randomInt(' + exprToBS(from) + ', ' + exprToBS(to) + ')';
      }
      case 'lists_create_with': {
        const items = [];
        let i = 0;
        while (true) {
          const child = getChildBlock(blockEl, 'ADD' + i);
          if (!child) break;
          items.push(exprToBS(child));
          i++;
        }
        return '[' + items.join(', ') + ']';
      }
      case 'math_min':
      case 'math_max': {
        const items = [];
        let i = 0;
        while (true) {
          const child = getChildBlock(blockEl, 'NUM' + i);
          if (!child) break;
          items.push(exprToBS(child));
          i++;
        }
        const fn = type === 'math_min' ? 'min' : 'max';
        return fn + '(' + items.join(', ') + ')';
      }

      case 'text_compare':
      case 'text_contains': {
        const opVal = getField(blockEl, 'OP') || '';
        const t1 = getChildBlock(blockEl, 'TEXT1');
        const t2 = getChildBlock(blockEl, 'TEXT2');
        const cmpMap = { 'EQ': ' = ', 'NEQ': ' != ', 'LT': ' < ', 'LTE': ' <= ', 'GT': ' > ', 'GTE': ' >= ', 'CONTAINS': ' contains ', 'STARTS_AT': ' starts_at ', 'ENDS_AT': ' ends_at ' };
        return exprToBS(t1) + (cmpMap[opVal] || (' OP=' + opVal + ' ')) + exprToBS(t2);
      }
      case 'text_trim': {
        const c = getChildBlock(blockEl, 'VALUE') || getChildBlock(blockEl, 'TEXT');
        return 'trim(' + exprToBS(c) + ')';
      }
      case 'text_changeCase': {
        const opCC = getField(blockEl, 'OP') === 'UPCASE' ? 'uppercase' : 'lowercase';
        const c = getChildBlock(blockEl, 'VALUE') || getChildBlock(blockEl, 'TEXT');
        return opCC + '(' + exprToBS(c) + ')';
      }
      case 'text_starts_at': {
        const txt = getChildBlock(blockEl, 'VALUE') || getChildBlock(blockEl, 'TEXT');
        const piece = getChildBlock(blockEl, 'PIECE');
        return 'starts_at(' + exprToBS(txt) + ', ' + exprToBS(piece) + ')';
      }
      case 'text_replace_all':
      case 'text_replace_mappings': {
        const txt = getChildBlock(blockEl, 'TEXT');
        const search = getChildBlock(blockEl, 'SEARCH');
        const replacement = getChildBlock(blockEl, 'REPLACEMENT');
        if (type === 'text_replace_all')
          return 'replace_all(' + exprToBS(txt) + ', ' + exprToBS(search) + ', ' + exprToBS(replacement) + ')';
        const mappings = getChildBlock(blockEl, 'MAPPINGS');
        const lang = getChildBlock(blockEl, 'LANGUAGE');
        return 'replace_mappings(' + exprToBS(txt) + ', ' + exprToBS(mappings) + (lang ? ', ' + exprToBS(lang) : '') + ')';
      }
      case 'text_segment': {
        const txt = getChildBlock(blockEl, 'TEXT');
        const start = getChildBlock(blockEl, 'START');
        const len = getChildBlock(blockEl, 'LENGTH');
        return 'segment(' + exprToBS(txt) + ', ' + exprToBS(start) + ', ' + exprToBS(len) + ')';
      }
      case 'text_split': {
        const txt = getChildBlock(blockEl, 'TEXT');
        const at = getChildBlock(blockEl, 'AT');
        return 'split(' + exprToBS(txt) + ', ' + exprToBS(at) + ')';
      }
      case 'text_split_at_spaces': {
        const c = getChildBlock(blockEl, 'TEXT');
        return 'split_at_spaces(' + exprToBS(c) + ')';
      }
      case 'text_reverse': {
        const c = getChildBlock(blockEl, 'VALUE') || getChildBlock(blockEl, 'TEXT');
        return 'reverse(' + exprToBS(c) + ')';
      }
      case 'text_isEmpty':
      case 'text_is_string': {
        const c = getChildBlock(blockEl, type === 'text_isEmpty' ? 'TEXT' : 'THING');
        const name = type.replace('text_', '');
        return name + '(' + exprToBS(c) + ')';
      }
      case 'obfuscated_text':
        return '"' + (getField(blockEl, 'TEXT') || '') + '"';

      case 'color_black': case 'color_blue': case 'color_cyan': case 'color_dark_gray':
      case 'color_gray': case 'color_green': case 'color_light_gray': case 'color_magenta':
      case 'color_orange': case 'color_pink': case 'color_red': case 'color_white':
      case 'color_yellow': {
        const hex = getField(blockEl, 'COLOR');
        const name = type.replace('color_', '');
        return hex ? ('"' + name + '"') : ('"' + name + '"');
      }
      case 'color_make_color': {
        const args = [];
        for (const n of ['ALPHA', 'RED', 'GREEN', 'BLUE', 'COLOR']) {
          const child = getChildBlock(blockEl, n);
          if (child) args.push(exprToBS(child));
        }
        return 'make_color(' + args.join(', ') + ')';
      }
      case 'color_split_color': {
        const c = getChildBlock(blockEl, 'COLOR');
        return 'split_color(' + exprToBS(c) + ')';
      }

      case 'lists_length':
      case 'lists_is_empty':
      case 'lists_pick_random_item':
      case 'lists_but_first':
      case 'lists_but_last':
      case 'lists_reverse':
      case 'lists_minimum_value':
      case 'lists_maximum_value':
      case 'lists_copy':
      case 'lists_to_csv_row':
      case 'lists_from_csv_table': {
        const child = getChildBlock(blockEl, type === 'lists_from_csv_table' ? 'TEXT' : 'LIST');
        const shortName = type.replace('lists_', '');
        return shortName + '(' + exprToBS(child) + ')';
      }
      case 'lists_is_list': {
        const c = getChildBlock(blockEl, 'THING');
        return 'is_list(' + exprToBS(c) + ')';
      }
      case 'lists_is_in':
      case 'lists_position_in': {
        const thing = getChildBlock(blockEl, 'THING');
        const list = getChildBlock(blockEl, 'LIST');
        const shortName = type.replace('lists_', '');
        return shortName + '(' + exprToBS(thing) + ', ' + exprToBS(list) + ')';
      }
      case 'lists_lookup_in_pairs': {
        const key = getChildBlock(blockEl, 'KEY');
        const list = getChildBlock(blockEl, 'LIST');
        const notFound = getChildBlock(blockEl, 'NOTFOUND');
        return 'lookup_in_pairs(' + exprToBS(key) + ', ' + exprToBS(list) + (notFound ? ', ' + exprToBS(notFound) : '') + ')';
      }
      case 'lists_join_with_separator': {
        const list = getChildBlock(blockEl, 'LIST');
        const sep = getChildBlock(blockEl, 'SEPARATOR');
        return 'join_with_separator(' + exprToBS(list) + ', ' + exprToBS(sep) + ')';
      }
      case 'lists_select_item': {
        const list = getChildBlock(blockEl, 'LIST');
        const idx = getChildBlock(blockEl, 'INDEX');
        return 'select_item(' + exprToBS(list) + ', ' + exprToBS(idx) + ')';
      }
      case 'lists_slice': {
        const list = getChildBlock(blockEl, 'LIST');
        const start = getChildBlock(blockEl, 'START');
        const len = getChildBlock(blockEl, 'LENGTH');
        return 'slice(' + exprToBS(list) + ', ' + exprToBS(start) + ', ' + exprToBS(len) + ')';
      }
      case 'lists_from_csv_row': {
        const c = getChildBlock(blockEl, 'TEXT');
        return 'from_csv_row(' + exprToBS(c) + ')';
      }
      case 'lists_to_csv_table':
      case 'lists_filter':
      case 'lists_map':
      case 'lists_reduce':
      case 'lists_sort':
      case 'lists_sort_comparator':
      case 'lists_sort_key': {
        const shortName = type.replace('lists_', '');
        const list = getChildBlock(blockEl, 'LIST');
        const other = getChildBlock(blockEl, 'PREDICATE') || getChildBlock(blockEl, 'OPERATION');
        return shortName + '(' + exprToBS(list) + (other ? ', ' + exprToBS(other) : '') + ')';
      }

      case 'math_neg': {
        const c = getChildBlock(blockEl, 'NUM');
        return '-' + exprToBS(c);
      }
      case 'math_atan2': {
        const y = getChildBlock(blockEl, 'Y');
        const x = getChildBlock(blockEl, 'X');
        return 'atan2(' + exprToBS(y) + ', ' + exprToBS(x) + ')';
      }
      case 'math_bitwise': {
        const opB = getField(blockEl, 'OP') || '';
        const a = getChildBlock(blockEl, 'A');
        const b = getChildBlock(blockEl, 'B');
        const bitMap = { 'BITAND': ' & ', 'BITOR': ' | ', 'BITXOR': ' ^ ', 'BITNOT': ' ~ ' };
        if (opB === 'BITNOT') return '~' + exprToBS(a);
        return exprToBS(a) + (bitMap[opB] || (' ' + opB + ' ')) + exprToBS(b);
      }
      case 'math_convert_angles':
      case 'math_convert_number': {
        const opC = getField(blockEl, 'OP') || '';
        const c = getChildBlock(blockEl, 'NUM');
        return type.replace('math_', '') + '(' + exprToBS(c) + ', ' + opC + ')';
      }
      case 'math_format_as_decimal': {
        const num = getChildBlock(blockEl, 'NUM');
        const places = getChildBlock(blockEl, 'PLACES');
        return 'format_as_decimal(' + exprToBS(num) + ', ' + exprToBS(places) + ')';
      }
      case 'math_is_a_number': {
        const c = getChildBlock(blockEl, 'THING');
        return 'is_number(' + exprToBS(c) + ')';
      }
      case 'math_mode_of_list':
      case 'math_on_list2': {
        const opM = getField(blockEl, 'OP') || '';
        const list = getChildBlock(blockEl, 'LIST');
        return type.replace('math_', '') + '(' + exprToBS(list) + (opM ? ', ' + opM : '') + ')';
      }
      case 'math_number_radix': {
        const c = getChildBlock(blockEl, 'NUM');
        const radix = getField(blockEl, 'OP') || '';
        return 'number_radix(' + exprToBS(c) + ', ' + radix + ')';
      }

      case 'pair': {
        const f = getChildBlock(blockEl, 'FIRST') || getChildBlock(blockEl, 'KEY');
        const s = getChildBlock(blockEl, 'SECOND') || getChildBlock(blockEl, 'VALUE');
        return exprToBS(f) + ': ' + exprToBS(s);
      }
      case 'dictionaries_create_with': {
        return '#dictionaries_create_with(...)';
      }
      case 'dictionaries_length':
      case 'dictionaries_is_dict':
      case 'dictionaries_is_key_in':
      case 'dictionaries_lookup':
      case 'dictionaries_get_values':
      case 'dictionaries_alist_to_dict':
      case 'dictionaries_dict_to_alist':
      case 'dictionaries_copy':
      case 'dictionaries_getters':
      case 'dictionaries_recursive_lookup':
      case 'dictionaries_combine_dicts': {
        const shortName = type.replace('dictionaries_', '');
        const values = [];
        for (const name of ['KEY', 'DICT', 'DICT1', 'DICT2', 'THING', 'LIST', 'NOTFOUND', 'VALUE']) {
          const child = getChildBlock(blockEl, name);
          if (child) values.push(exprToBS(child));
        }
        return shortName + '(' + values.join(', ') + ')';
      }

      case 'matrices_create':
      case 'matrices_create_multidim': {
        return '#matrices_create(...)';
      }
      case 'matrices_add':
      case 'matrices_subtract':
      case 'matrices_multiply':
      case 'matrices_power':
      case 'matrices_transpose':
      case 'matrices_rotate_left':
      case 'matrices_rotate_right':
      case 'matrices_get_dims':
      case 'matrices_is_matrix':
      case 'matrices_operations': {
        const shortName = type.replace('matrices_', '');
        const values = [];
        for (const name of ['MATRIX', 'MATRIX1', 'MATRIX2', 'OP', 'SECOND', 'NUM']) {
          const child = getChildBlock(blockEl, name);
          if (child) values.push(exprToBS(child));
          else {
            const fieldV = getField(blockEl, name);
            if (fieldV) values.push(fieldV);
          }
        }
        return shortName + '(' + values.join(', ') + ')';
      }
      case 'matrices_get_cell':
      case 'matrices_get_row':
      case 'matrices_get_column':
      case 'matrices_set_cell':
      case 'matrices_set_row':
      case 'matrices_set_column': {
        const shortName = type.replace('matrices_', '');
        const values = [];
        for (const name of ['MATRIX', 'ROW', 'COLUMN', 'VALUE', 'INDEX']) {
          const child = getChildBlock(blockEl, name);
          if (child) values.push(exprToBS(child));
        }
        return shortName + '(' + values.join(', ') + ')';
      }

      case 'local_declaration_expression': {
        const names = [];
        const mut = Array.from(blockEl.childNodes).find(n => n.nodeType === 1 && n.tagName === 'mutation');
        if (mut) {
          Array.from(mut.childNodes).filter(n => n.nodeType === 1 && n.tagName === 'localname').forEach(n => names.push(n.getAttribute('name') || ''));
        }
        if (names.length === 0) {
          let vi = 0;
          while (getField(blockEl, 'VAR' + vi)) { names.push(getField(blockEl, 'VAR' + vi)); vi++; }
        }
        const inits = names.map(n => { const c = getChildBlock(blockEl, 'DECLARE' + names.indexOf(n)); return c ? exprToBS(c) : '?'; });
        const bodyEl = getChildBlock(blockEl, 'BODY');
        const asBlocks = names.map((n, i) => n + ' = ' + inits[i]).join(', ');
        return '(' + asBlocks + ' in ' + exprToBS(bodyEl) + ')';
      }

      case 'procedures_getWithDropdown':
      case 'procedures_getWithName': {
        return '#' + (getField(blockEl, 'PROCNAME') || getField(blockEl, 'NAME') || '') + '';
      }
      case 'procedures_numArgs': {
        return '#arg_count(' + (getField(blockEl, 'NAME') || '') + ')';
      }
      case 'procedures_callanonreturn':
      case 'procedures_callanonnoreturn': {
        const proc = getChildBlock(blockEl, 'THUNK') || getChildBlock(blockEl, 'PROC');
        const args = getArgsList(blockEl);
        return 'call_anon(' + exprToBS(proc) + (args.length ? ', ' + args.join(', ') : '') + ')';
      }
      case 'procedures_callanonreturn_inputlist':
      case 'procedures_callanonnoreturn_inputlist': {
        const proc = getChildBlock(blockEl, 'THUNK') || getChildBlock(blockEl, 'PROC');
        const listArg = getChildBlock(blockEl, 'LIST');
        return 'call_anon(' + exprToBS(proc) + ', ' + exprToBS(listArg) + ')';
      }

      case 'logic_compare':
      case 'logic_operation': {
        const opL = getField(blockEl, 'OP') || '';
        const a = getChildBlock(blockEl, 'A');
        const b = getChildBlock(blockEl, 'B');
        const legacyMap = { 'EQ': ' = ', 'NEQ': ' != ', 'LT': ' < ', 'LTE': ' <= ', 'GT': ' > ', 'GTE': ' >= ', 'AND': ' and ', 'OR': ' or ' };
        return exprToBS(a) + (legacyMap[opL] || ' OP=' + opL + ' ') + exprToBS(b);
      }

      default: {
        const parts = [];

        for (const prefix of ['ARG', 'NUM', 'ADD']) {
          let i = 0;
          while (true) {
            const child = getChildBlock(blockEl, prefix + i);
            if (!child) break;
            parts.push(exprToBS(child));
            i++;
          }
          if (i > 0) break;
        }

        if (parts.length === 0) {
          for (const c of blockEl.childNodes) {
            if (c.nodeType === 1 && c.tagName === 'value') {
              const child = Array.from(c.childNodes).find(n => n.nodeType === 1 && (n.tagName === 'block' || n.tagName === 'shadow'));
              if (child) parts.push(exprToBS(child));
            }
          }
        }

        for (const c of blockEl.childNodes) {
          if (c.nodeType === 1 && c.tagName === 'field') {
            const fname = c.getAttribute('name');
            const fval = c.textContent.trim();
            if (fname && fval && !['COMPONENT_SELECTOR', 'PROP'].includes(fname) && !fname.startsWith('VAR')) {
              parts.push(fval);
            }
          }
        }
        if (parts.length === 0) return '#' + type;
        return type + '(' + parts.join(', ') + ')';
      }
    }
  }

  function stmtsToBS(firstBlock, indentLevel) {
    if (!firstBlock) return '';
    const pad = '    '.repeat(indentLevel);
    let result = '';
    let current = firstBlock;
    while (current) {
      const line = stmtBlockToBS(current, indentLevel);
      if (line) result += line + '\n';
      const nextValue = Array.from(current.childNodes).find(n =>
        n.nodeType === 1 && n.tagName === 'next'
      );
      if (nextValue) {
        current = Array.from(nextValue.childNodes).find(n =>
          n.nodeType === 1 && (n.tagName === 'block' || n.tagName === 'shadow')
        );
      } else {
        current = null;
      }
    }
    return result;
  }

  function stmtBlockToBS(blockEl, indentLevel) {
    const type = blockEl.getAttribute('type');
    const pad = '    '.repeat(indentLevel);

    switch (type) {
      case 'component_event': {
        const comp = getField(blockEl, 'COMPONENT_SELECTOR') || '';
        const eventName = getMutation(blockEl, 'event_name') || '';
        const params = getArgNames(blockEl);
        let result = pad + 'when ' + comp + '.' + eventName + (params.length ? '(' + params.join(', ') + ')' : '') + ' ->\n';
        const doBlock = getChildBlock(blockEl, 'DO');
        if (doBlock) {
          result += stmtsToBS(doBlock, indentLevel + 1);
        }
        return result;
      }
      case 'global_declaration': {
        const name = getField(blockEl, 'NAME') || '';
        const value = getChildBlock(blockEl, 'VALUE');
        return pad + 'global ' + name + ' -> ' + exprToBS(value);
      }
      case 'procedures_defnoreturn':
      case 'procedures_defreturn': {
        const name = getField(blockEl, 'NAME') || '';
        const params = getArgNames(blockEl);
        let result = pad + 'def ' + name + '(' + params.join(', ') + ') ->\n';
        const stackBlock = getChildBlock(blockEl, 'STACK');
        if (stackBlock) {
          result += stmtsToBS(stackBlock, indentLevel + 1);
        }
        if (type === 'procedures_defreturn') {
          const retBlock = getChildBlock(blockEl, 'RETURN');
          if (retBlock) {
            result += pad + '    return ' + exprToBS(retBlock);
          }
        }
        return result;
      }
      case 'component_set_get': {
        const sog = getMutation(blockEl, 'set_or_get');
        if (sog === 'set') {
          const comp = getField(blockEl, 'COMPONENT_SELECTOR') || '';
          const prop = getField(blockEl, 'PROP') || '';
          const value = getChildBlock(blockEl, 'VALUE');
          return pad + comp + '.' + prop + ' -> ' + exprToBS(value);
        }
        return '';
      }
      case 'component_method': {
        const comp = getField(blockEl, 'COMPONENT_SELECTOR') || '';
        const method = getMutation(blockEl, 'method_name') || '';
        const args = getArgsList(blockEl);
        return pad + 'call ' + comp + '.' + method + '(' + args.join(', ') + ')';
      }
      case 'procedures_callnoreturn': {
        const name = getField(blockEl, 'PROCNAME') || getMutation(blockEl, 'name') || '';
        const args = getArgsList(blockEl);
        return pad + 'call ' + name + '(' + args.join(', ') + ')';
      }
      case 'lexical_variable_set': {
        const varName = getField(blockEl, 'VAR') || '';
        const value = getChildBlock(blockEl, 'VALUE');
        if (!value) return pad + varName + ' -> ?';
        const valBS = exprToBS(value);
        return pad + varName + ' -> ' + valBS;
      }
      case 'controls_if': {
        let result = '';
        const mutEl = Array.from(blockEl.childNodes).find(n => n.nodeType === 1 && n.tagName === 'mutation');
        const eif = mutEl ? parseInt(mutEl.getAttribute('elseif') || '0') : 0;
        const hasElse = mutEl ? parseInt(mutEl.getAttribute('else') || '0') !== 0 : false;

        const cond0 = getChildBlock(blockEl, 'IF0');
        result += pad + 'if ' + exprToBS(cond0) + ' ->\n';
        const do0 = getChildBlock(blockEl, 'DO0');
        if (do0) result += stmtsToBS(do0, indentLevel + 1);

        for (let i = 0; i < eif; i++) {
          const cond = getChildBlock(blockEl, 'IF' + (i + 1));
          result += pad + 'else if ' + exprToBS(cond) + ' ->\n';
          const d = getChildBlock(blockEl, 'DO' + (i + 1));
          if (d) result += stmtsToBS(d, indentLevel + 1);
        }

        if (hasElse) {
          result += pad + 'else ->\n';
          const elseBlock = getChildBlock(blockEl, 'ELSE');
          if (elseBlock) result += stmtsToBS(elseBlock, indentLevel + 1);
        }
        return result;
      }
      case 'controls_while': {
        const cond = getChildBlock(blockEl, 'BOOL');
        let result = pad + 'while ' + exprToBS(cond) + ' ->\n';
        const doBlock = getChildBlock(blockEl, 'DO');
        if (doBlock) result += stmtsToBS(doBlock, indentLevel + 1);
        return result;
      }
      case 'controls_forEach': {
        const varName = getField(blockEl, 'VAR') || '';
        const list = getChildBlock(blockEl, 'LIST');
        let result = pad + 'foreach ' + varName + ' in ' + exprToBS(list) + ' ->\n';
        const doBlock = getChildBlock(blockEl, 'DO');
        if (doBlock) result += stmtsToBS(doBlock, indentLevel + 1);
        return result;
      }
      case 'controls_forRange': {
        const varName = getField(blockEl, 'VAR') || '';
        const start = getChildBlock(blockEl, 'START');
        const end = getChildBlock(blockEl, 'END');
        const step = getChildBlock(blockEl, 'STEP');
        let result = pad + 'for ' + varName + ' from ' + exprToBS(start) + ' to ' + exprToBS(end);
        const stepBS = exprToBS(step);
        if (stepBS !== '1') result += ' by ' + stepBS;
        result += ' ->\n';
        const doBlock = getChildBlock(blockEl, 'DO');
        if (doBlock) result += stmtsToBS(doBlock, indentLevel + 1);
        return result;
      }

      case 'local_declaration_statement': {
        const names = [];
        const mut = Array.from(blockEl.childNodes).find(n => n.nodeType === 1 && n.tagName === 'mutation');
        if (mut) {
          Array.from(mut.childNodes).filter(n => n.nodeType === 1 && n.tagName === 'localname').forEach(n => names.push(n.getAttribute('name') || ''));
        }
        if (names.length === 0) {
          let vi = 0;
          while (getField(blockEl, 'VAR' + vi)) { names.push(getField(blockEl, 'VAR' + vi)); vi++; }
        }
        const inits = names.map(n => { const c = getChildBlock(blockEl, 'DECLARE' + names.indexOf(n)); return c ? exprToBS(c) : '?'; });
        const asBlocks = names.map((n, i) => n + ' = ' + inits[i]).join(', ');
        let result = pad + 'let ' + asBlocks + '\n';
        const nextBlock = getChildBlock(blockEl, 'STACK') || getChildBlock(blockEl, 'BODY');
        if (nextBlock) result += stmtsToBS(nextBlock, indentLevel);
        return result;
      }

      case 'controls_for_each_dict': {
        const keyVar = getField(blockEl, 'KEY') || getField(blockEl, 'VAR0') || '';
        const valVar = getField(blockEl, 'VALUE') || getField(blockEl, 'VAR1') || '';
        const dict = getChildBlock(blockEl, 'DICT');
        let result = pad + 'for each ' + keyVar + ', ' + valVar + ' in ' + exprToBS(dict) + ' ->\n';
        const doBlock = getChildBlock(blockEl, 'DO');
        if (doBlock) result += stmtsToBS(doBlock, indentLevel + 1);
        return result;
      }

      case 'lists_add_items':
      case 'lists_append_list': {
        const list = getChildBlock(blockEl, 'LIST');
        const item = getChildBlock(blockEl, 'ITEM');
        const action = type === 'lists_add_items' ? 'add_items_to' : 'append_list_to';
        return pad + action + '(' + exprToBS(list) + ', ' + exprToBS(item) + ')';
      }
      case 'lists_insert_item': {
        const list = getChildBlock(blockEl, 'LIST');
        const index = getChildBlock(blockEl, 'INDEX');
        const item = getChildBlock(blockEl, 'ITEM');
        return pad + 'insert_item(' + exprToBS(list) + ', ' + exprToBS(index) + ', ' + exprToBS(item) + ')';
      }
      case 'lists_remove_item': {
        const list = getChildBlock(blockEl, 'LIST');
        const index = getChildBlock(blockEl, 'INDEX');
        return pad + 'remove_item(' + exprToBS(list) + ', ' + exprToBS(index) + ')';
      }
      case 'lists_replace_item': {
        const list = getChildBlock(blockEl, 'LIST');
        const index = getChildBlock(blockEl, 'INDEX');
        const rep = getChildBlock(blockEl, 'REPLACEMENT');
        return pad + 'replace_item(' + exprToBS(list) + ', ' + exprToBS(index) + ', ' + exprToBS(rep) + ')';
      }

      case 'dictionaries_set_pair':
      case 'dictionaries_delete_pair': {
        const dict = getChildBlock(blockEl, 'DICT');
        const key = getChildBlock(blockEl, 'KEY');
        const val = getChildBlock(blockEl, 'VALUE');
        const action = type === 'dictionaries_set_pair' ? 'set_pair' : 'delete_pair';
        return pad + action + '(' + exprToBS(dict) + ', ' + exprToBS(key) + (val ? ', ' + exprToBS(val) : '') + ')';
      }
      case 'dictionaries_recursive_set': {
        const dict = getChildBlock(blockEl, 'DICT');
        const keys = getChildBlock(blockEl, 'KEYS') || getChildBlock(blockEl, 'KEY');
        const val = getChildBlock(blockEl, 'VALUE');
        return pad + 'recursive_set(' + exprToBS(dict) + ', ' + exprToBS(keys) + ', ' + exprToBS(val) + ')';
      }
      case 'dictionaries_walk_all':
      case 'dictionaries_walk_tree': {
        const dict = getChildBlock(blockEl, 'DICT');
        const keyVar = getField(blockEl, 'KEY') || getField(blockEl, 'VAR0') || '';
        const valVar = getField(blockEl, 'VALUE') || getField(blockEl, 'VAR1') || '';
        let result = pad + type.replace('dictionaries_', '') + ' ' + keyVar + ', ' + valVar + ' in ' + exprToBS(dict) + ' ->\n';
        const doBlock = getChildBlock(blockEl, 'DO');
        if (doBlock) result += stmtsToBS(doBlock, indentLevel + 1);
        return result;
      }

      case 'math_random_set_seed': {
        const seed = getChildBlock(blockEl, 'SEED');
        return pad + 'random_set_seed(' + exprToBS(seed) + ')';
      }

      case 'procedures_defanonreturn':
      case 'procedures_defanonnoreturn': {
        const params = getArgNames(blockEl);
        let result = pad + 'def anon(' + params.join(', ') + ') ->\n';
        const stackBlock = getChildBlock(blockEl, 'STACK');
        if (stackBlock) result += stmtsToBS(stackBlock, indentLevel + 1);
        return result;
      }

      default: {

        const parts = [];
        for (const c of blockEl.childNodes) {
          if (c.nodeType === 1 && (c.tagName === 'value' || c.tagName === 'statement')) {
            const child = Array.from(c.childNodes).find(n => n.nodeType === 1 && (n.tagName === 'block' || n.tagName === 'shadow'));
            if (child && c.getAttribute('name') !== 'DO' && c.getAttribute('name') !== 'STACK') {
              if (c.tagName === 'statement') {
                parts.push(stmtsToBS(child, indentLevel + 1).trim());
              } else {
                parts.push(exprToBS(child));
              }
            }
          }
        }
        const suffix = parts.length > 0 ? ' ' + parts.join(', ') : '';
        return pad + '#' + type + '(' + suffix + ')';
      }
    }
  }

  function xmlToBlockScript(xmlStr) {
    const trimmed = xmlStr.trim();
    if (!trimmed.startsWith('<')) return '';
    let dom;
    try {
      const parsed = new DOMParser().parseFromString(trimmed, 'text/xml');
      const parseErr = parsed.querySelector('parsererror');
      if (parseErr) throw new Error(parseErr.textContent.split('\n')[0]);
      dom = parsed.documentElement;
    } catch (e) {
      return 'Error parsing XML: ' + e.message;
    }

    const blockNodes = Array.from(dom.childNodes).filter(
      n => n.nodeType === 1 && (n.tagName === 'block' || n.localName === 'block')
    );

    let result = '';
    for (const block of blockNodes) {
      const bs = stmtBlockToBS(block, 0);
      if (bs) result += bs + '\n';
    }
    return result.trim();
  }

  function isBlockScript(text) {
    const trimmed = text.trim();
    if (!trimmed) return false;
    if (trimmed.startsWith('<')) return false;
    if (trimmed.startsWith('{')) return false;
    return /^(when|global|def|#|call|if|else|while|foreach|for|return)\b/m.test(trimmed);
  }

  function showStatus(msg, isError) {
    const el = document.getElementById('ai2xt-status');
    if (!el) return;
    el.textContent = msg;
    el.style.color = isError ? '#f87171' : '#4ade80';
    el.style.opacity = '1';
    clearTimeout(el._timer);
    el._timer = setTimeout(() => { el.style.opacity = '0'; }, 5000);
  }

  function importXML() {
    const text = document.getElementById('ai2xt-input').value.trim();
    if (!text) { showStatus('Paste some BlockScript or XML first!', true); return; }

    let xmlText = text;
    let sourceInfo = '';

    if (isBlockScript(text)) {
      try {
        xmlText = parseBS(text);
        sourceInfo = ' (converted from BlockScript)';
      } catch (e) {
        showStatus('BlockScript error: ' + e.message, true);
        console.error('[BSI] BlockScript parse error:', e);
        return;
      }
    }

    const found = getWorkspace();
    if (!found) {
      showStatus('Workspace not found — switch to Blocks tab first.', true);
      return;
    }
    const { Blockly, workspace } = found;

    try {
      const count = textToWorkspace(Blockly, workspace, xmlText);
      showStatus(`✓ Imported ${count} block(s)${sourceInfo}!`);
    } catch (e) {
      showStatus('Import error: ' + e.message, true);
      console.error('[BSI] Import error:', e);
    }
  }

  let exportFormat = 'xml';

  function setExportFormat(fmt) {
    exportFormat = fmt;
    const btn = document.getElementById('ai2xt-export-fmt');
    if (btn) btn.textContent = fmt === 'bs' ? 'BlockScript' : 'XML';
  }

  function exportBlocks() {
    const found = getWorkspace();
    if (!found) {
      showStatus('Workspace not found — switch to Blocks tab first.', true);
      return;
    }
    const { Blockly, workspace } = found;

    try {
      const xmlText = workspaceToText(Blockly, workspace);
      const ta = document.getElementById('ai2xt-output');

      if (exportFormat === 'bs') {
        const bsText = xmlToBlockScript(xmlText);
        if (bsText.startsWith('Error')) {
          showStatus(bsText, true);
          return;
        }
        ta.value = bsText || 'No blocks to export.';
      } else {
        ta.value = xmlText;
      }

      ta.select();
      showStatus('✓ Exported as ' + (exportFormat === 'bs' ? 'BlockScript' : 'XML') + '!');
    } catch (e) {
      showStatus('Export error: ' + e.message, true);
      console.error('[BSI] Export error:', e);
    }
  }

  function copyOutput() {
    const val = document.getElementById('ai2xt-output').value;
    if (!val) { showStatus('Nothing to copy — export first.', true); return; }
    navigator.clipboard.writeText(val).then(() => showStatus('✓ Copied!'));
  }

  if (!document.getElementById('ai2xt-font')) {
    const fl = document.createElement('link');
    fl.id = 'ai2xt-font'; fl.rel = 'stylesheet';
    fl.href = 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap';
    document.head.appendChild(fl);
  }

  const panel = document.createElement('div');
  panel.id = 'ai2xmltool-panel';
  panel.innerHTML = `
    <div id="ai2xt-header">
      <div id="ai2xt-header-left">
        <canvas id="ai2xt-logo" width="18" height="18"></canvas>
        <span id="ai2xt-title">BlockScript Injector</span>
      </div>
      <button id="ai2xt-toggle" title="Minimize" aria-label="Minimize panel">
        <svg id="ai2xt-chevron" width="11" height="11" viewBox="0 0 11 11" fill="none">
          <path d="M2 7l3.5-3.5L9 7" stroke="#fff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
    <div id="ai2xt-body">
      <div class="ai2xt-section">
        <div class="ai2xt-label"><img class="ai2xt-arrow" id="ai2xt-arrow-import" alt="" />Import BlockScript/XML → Blocks</div>
        <textarea id="ai2xt-input" placeholder="Paste BlockScript or XML here…" spellcheck="false"></textarea>
        <button id="ai2xt-import-btn">Inject Blocks</button>
      </div>
      <div class="ai2xt-rule"></div>
      <div class="ai2xt-section">
        <div class="ai2xt-label"><img class="ai2xt-arrow" id="ai2xt-arrow-export" alt="" />Export Blocks → <span id="ai2xt-export-fmt">XML</span></div>
        <div class="ai2xt-row">
          <button id="ai2xt-export-btn">Export All</button>
          <button id="ai2xt-fmt-toggle" class="ai2xt-fmt-btn">⎇</button>
          <button id="ai2xt-copy-btn">Copy</button>
        </div>
        <textarea id="ai2xt-output" placeholder="Exported content appears here…" readonly></textarea>
      </div>
      <div id="ai2xt-status"></div>
      <div id="ai2xt-footer">
        <a id="ai2xt-brand" href="https://pocketive.tachion.tech/blockscript" target="_blank" rel="noopener">
          <img id="ai2xt-brand-img" alt="" /><span id="ai2xt-brand-text">Pocketive</span>
        </a>
      </div>
    </div>
    <div id="ai2xt-drop-overlay">
      <div id="ai2xt-drop-inner">
        <img id="ai2xt-drop-img" alt="" />
        <p id="ai2xt-drop-text">Drop your .BS file here</p>
      </div>
      <div id="ai2xt-drop-preview" style="display:none">
        <p id="ai2xt-drop-filename"></p>
        <p id="ai2xt-drop-info"></p>
        <div class="ai2xt-drop-actions">
          <button id="ai2xt-drop-import-btn" class="ai2xt-drop-primary">Import</button>
          <button id="ai2xt-drop-cancel-btn" class="ai2xt-drop-secondary">Cancel</button>
        </div>
      </div>
    </div>
  `;

  const style = document.createElement('style');
  style.textContent = `
    #ai2xmltool-panel, #ai2xmltool-panel * {
      box-sizing: border-box;
      font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
      line-height: 1;
    }
    #ai2xmltool-panel {
      position: fixed;
      bottom: 24px; right: 20px;
      width: 288px;
      background: #ffffff;
      border: 1px solid #C7E1AF;
      border-radius: 8px;
      box-shadow: 0 4px 18px rgba(0,0,0,.11), 0 1px 3px rgba(0,0,0,.06);
      z-index: 999999;
      font-size: 13px;
      color: #1a2e06;
      overflow: hidden;
    }
    #ai2xt-header {
      display: flex; align-items: center; justify-content: space-between;
      padding: 8px 10px 8px 11px;
      background: #8ec239 !important;
      cursor: move; user-select: none;
    }
    #ai2xt-header-left { display: flex; align-items: center; gap: 8px; }
    #ai2xt-logo { display: block; width: 24px; height: 24px; flex-shrink: 0; border-radius: 3px; cursor: pointer; }
    @keyframes ai2xt-jump {
      0%   { transform: translateY(0)   scale(1);    }
      28%  { transform: translateY(-5px) scale(1.12); }
      58%  { transform: translateY(2px)  scale(0.94); }
      78%  { transform: translateY(-2px) scale(1.04); }
      100% { transform: translateY(0)   scale(1);    }
    }
    #ai2xt-logo.ai2xt-jumping { animation: ai2xt-jump .38s cubic-bezier(.36,.07,.19,.97) both; }
    #ai2xt-title { font-size: 12.5px; font-weight: 700; color: #fff; letter-spacing: .1px; }
    #ai2xt-toggle {
      display: flex; align-items: center; justify-content: center;
      width: 20px; height: 20px;
      background: rgba(255,255,255,.18); border: 1px solid rgba(255,255,255,.3);
      border-radius: 4px; cursor: pointer; padding: 0;
      transition: background .12s;
    }
    #ai2xt-toggle:hover { background: rgba(255,255,255,.32); }
    #ai2xt-chevron { transition: transform .3s cubic-bezier(.4,0,.2,1); }
    #ai2xmltool-panel.ai2xt-min #ai2xt-chevron { transform: rotate(180deg); }

    #ai2xt-body {
      padding: 11px 11px 8px;
      display: flex; flex-direction: column; gap: 9px;
      overflow: hidden;
      max-height: 520px; opacity: 1;
      transition: max-height .32s cubic-bezier(.4,0,.2,1),
                  opacity .22s cubic-bezier(.4,0,.2,1),
                  padding .32s cubic-bezier(.4,0,.2,1);
    }
    #ai2xt-body.ai2xt-collapsed { max-height: 0; opacity: 0; padding-top: 0; padding-bottom: 0; }

    .ai2xt-section { display: flex; flex-direction: column; gap: 6px; }
    .ai2xt-label { display: flex; align-items: center; gap: 5px; font-size: 10px; font-weight: 700; color: #3a5a0a; letter-spacing: .5px; }
    .ai2xt-arrow { width: 11px; height: 11px; object-fit: contain; flex-shrink: 0; display: block; }

    #ai2xt-input, #ai2xt-output {
      width: 100%; height: 80px;
      background: #F7FAF2; border: 1px solid #C7E1AF; border-radius: 5px;
      color: #1a2e06; font-size: 11px;
      font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
      padding: 7px 8px; resize: vertical; outline: none; line-height: 1.55;
      transition: border-color .12s, box-shadow .12s;
    }
    #ai2xt-input:focus {
      border-color: #8ec239; background: #fff;
      box-shadow: 0 0 0 2px rgba(125,202,0,.15);
    }
    #ai2xt-input::placeholder, #ai2xt-output::placeholder { color: #a8c87a; font-style: italic; }

    #ai2xt-import-btn, #ai2xt-export-btn, #ai2xt-copy-btn {
      border: none; border-radius: 5px; cursor: pointer;
      font-size: 12px; font-weight: 600; letter-spacing: .05px;
      transition: filter .12s, transform .08s;
    }
    #ai2xt-import-btn { width: 100%; padding: 8px; background: #8ec239; color: #fff; }
    #ai2xt-import-btn:hover { filter: brightness(1.08); }
    #ai2xt-import-btn:active { transform: scale(.98); filter: brightness(.93); }
    .ai2xt-row { display: flex; gap: 6px; }
    #ai2xt-export-btn, #ai2xt-copy-btn, #ai2xt-fmt-toggle {
      flex: 1; padding: 7px 8px;
      background: #fff; border: 1px solid #C7E1AF; color: #3a5a0a;
    }
    #ai2xt-export-btn:hover, #ai2xt-copy-btn:hover, #ai2xt-fmt-toggle:hover { background: #F7FAF2; border-color: #79BD44; }
    #ai2xt-fmt-toggle {
      flex: 0 0 34px; font-size: 14px; font-weight: 700; padding: 7px 0;
    }

    .ai2xt-rule { height: 1px; background: #C7E1AF; opacity: .7; }

    #ai2xt-status { font-size: 11px; font-weight: 500; min-height: 14px; opacity: 0; transition: opacity .3s; }

    #ai2xt-drop-overlay {
      display: none;
      position: absolute; inset: 0;
      background: rgba(255,255,255,.94);
      z-index: 100;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      border-radius: 8px;
    }
    #ai2xt-drop-overlay.active {
      display: flex;
    }
    #ai2xt-drop-inner {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }
    #ai2xt-drop-img {
      width: 80px; height: 80px;
      object-fit: contain;
      opacity: .7;
    }
    #ai2xt-drop-text {
      font-size: 13px;
      font-weight: 600;
      color: #4a7000;
    }
    #ai2xt-drop-preview {
      text-align: center;
    }
    #ai2xt-drop-filename {
      font-size: 12px;
      font-weight: 700;
      color: #1a2e06;
    }
    #ai2xt-drop-info {
      font-size: 11px;
      color: #3a5800;
      margin: 6px 0 10px;
    }
    .ai2xt-drop-actions {
      display: flex;
      gap: 8px;
      justify-content: center;
    }
    .ai2xt-drop-primary, .ai2xt-drop-secondary {
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 12px;
      font-weight: 600;
      padding: 7px 14px;
      transition: filter .12s;
    }
    .ai2xt-drop-primary {
      background: #8ec239;
      color: #fff;
    }
    .ai2xt-drop-primary:hover { filter: brightness(1.08); }
    .ai2xt-drop-secondary {
      background: #fff;
      border: 1px solid #C7E1AF;
      color: #3a5a0a;
    }
    .ai2xt-drop-secondary:hover { background: #F7FAF2; border-color: #79BD44; }

    #ai2xt-footer {
      display: flex; justify-content: flex-end;
      border-top: 1px solid #e8f0da; padding-top: 6px; margin-top: -1px;
    }
    #ai2xt-brand {
      display: inline-flex; align-items: center; gap: 4px;
      text-decoration: none; opacity: .45; transition: opacity .15s;
    }
    #ai2xt-brand:hover { opacity: .85; }
    #ai2xt-brand-img {
      width: 16px; height: 16px; object-fit: contain; border-radius: 2px;
      display: none;
    }
    #ai2xt-brand-img.loaded { display: block; }
    #ai2xt-brand-text {
      font-size: 10px; font-weight: 600; color: #3a5a0a;
      letter-spacing: .1px; text-transform: none;
    }
  `;

  document.head.appendChild(style);
  document.body.appendChild(panel);

  (function setupLogo() {
    const canvas  = document.getElementById('ai2xt-logo');
    const ctx     = canvas.getContext('2d');
    canvas.width  = 80;
    canvas.height = 80;

    const F = [AI2XT_IMGS.frame1, AI2XT_IMGS.frame2, AI2XT_IMGS.frame3];

    function drawFrame(src) {
      const img = new Image();
      img.onload = () => ctx.drawImage(img, 0, 0, 80, 80);
      img.src = src;
    }

    drawFrame(F[0]);

    let blinking = false;

    function blink() {
      if (blinking) return;
      blinking = true;
      const seq = [F[2], F[1], F[2], F[0]];
      let i = 0;
      function next() {
        drawFrame(seq[i]);
        i++;
        if (i < seq.length) {

          const delay = (i === 2) ? 120 + Math.random() * 120 : 70 + Math.random() * 80;
          setTimeout(next, delay);
        } else {
          blinking = false;
        }
      }
      next();
    }

    canvas.addEventListener('click', () => {
      canvas.classList.remove('ai2xt-jumping');
      void canvas.offsetWidth;
      canvas.classList.add('ai2xt-jumping');
      canvas.addEventListener('animationend', () => canvas.classList.remove('ai2xt-jumping'), { once: true });
      blink();
    });

    setTimeout(function sched() {
      blink();
      setTimeout(sched, 3000 + Math.random() * 4000);
    }, 2000 + Math.random() * 2000);
  })();

  (function setupBrand() {
    const img = document.getElementById('ai2xt-brand-img');
    if (!img) return;
    img.onload = () => img.classList.add('loaded');
    img.src = AI2XT_IMGS.pocketive;
  })();

  document.getElementById('ai2xt-arrow-import').src = AI2XT_IMGS.arrowImport;
  document.getElementById('ai2xt-arrow-export').src = AI2XT_IMGS.arrowExport;

  document.getElementById('ai2xt-import-btn').addEventListener('click', importXML);
  document.getElementById('ai2xt-export-btn').addEventListener('click', exportBlocks);
  document.getElementById('ai2xt-copy-btn').addEventListener('click', copyOutput);
  document.getElementById('ai2xt-fmt-toggle').addEventListener('click', () => {
    setExportFormat(exportFormat === 'bs' ? 'xml' : 'bs');
  });

  const hdr = document.getElementById('ai2xt-header');
  let drag = false, ox = 0, oy = 0;
  hdr.addEventListener('mousedown', e => {
    if (e.target.closest('#ai2xt-toggle')) return;
    drag = true;
    const r = panel.getBoundingClientRect();
    ox = e.clientX - r.left; oy = e.clientY - r.top;
    e.preventDefault();
  });
  document.addEventListener('mousemove', e => {
    if (!drag) return;
    panel.style.right = panel.style.bottom = 'auto';
    panel.style.left = (e.clientX - ox) + 'px';
    panel.style.top  = (e.clientY - oy) + 'px';
  });
  document.addEventListener('mouseup', () => { drag = false; });

  let minimized = false;
  document.getElementById('ai2xt-toggle').addEventListener('click', () => {
    minimized = !minimized;
    panel.classList.toggle('ai2xt-min', minimized);
    document.getElementById('ai2xt-body').classList.toggle('ai2xt-collapsed', minimized);
  });

  const panelEl = panel;
  let dropFileData = null;

  function showDropPreview(fileName, content) {
    const overlay = document.getElementById('ai2xt-drop-overlay');
    const inner = document.getElementById('ai2xt-drop-inner');
    const preview = document.getElementById('ai2xt-drop-preview');
    const info = document.getElementById('ai2xt-drop-info');
    const fnEl = document.getElementById('ai2xt-drop-filename');

    fnEl.textContent = fileName;
    dropFileData = content;

    let blockCount = 0;
    try {
      const lines = content.split('\n');
      for (const raw of lines) {
        const expanded = raw.replace(/\t/g, '    ');
        const trimmed = expanded.trimEnd();
        if (!trimmed || trimmed.trimStart().startsWith('#')) continue;
        const indent = trimmed.length - trimmed.trimStart().length;
        if (indent !== 0) continue;
        const text = trimmed.trimStart().replace(/#.*$/, '').trimEnd();
        if (!text) continue;
        if (/^(when|global|def)\b/.test(text)) blockCount++;
      }
    } catch (e) { blockCount = 0; }

    info.textContent = blockCount > 0 ? `~${blockCount} top-level block(s) detected` : 'Preview available';
    inner.style.display = 'none';
    preview.style.display = 'block';
  }

  function resetDropOverlay() {
    const overlay = document.getElementById('ai2xt-drop-overlay');
    const inner = document.getElementById('ai2xt-drop-inner');
    const preview = document.getElementById('ai2xt-drop-preview');
    overlay.classList.remove('active');
    inner.style.display = 'flex';
    preview.style.display = 'none';
    dropFileData = null;
  }

  document.getElementById('ai2xt-drop-cancel-btn').addEventListener('click', resetDropOverlay);

  document.getElementById('ai2xt-drop-import-btn').addEventListener('click', () => {
    if (dropFileData) {
      const ta = document.getElementById('ai2xt-input');
      ta.value = dropFileData;
      resetDropOverlay();
      importXML();
    }
  });

  let dragEnterCount = 0;

  panel.addEventListener('dragenter', e => {
    e.preventDefault();
    e.stopPropagation();
    dragEnterCount++;
    if (dragEnterCount === 1) {
      const overlay = document.getElementById('ai2xt-drop-overlay');
      const inner = document.getElementById('ai2xt-drop-inner');
      const preview = document.getElementById('ai2xt-drop-preview');
      inner.style.display = 'flex';
      preview.style.display = 'none';
      overlay.classList.add('active');
    }
  });

  panel.addEventListener('dragover', e => {
    e.preventDefault();
    e.stopPropagation();
  });

  panel.addEventListener('dragleave', e => {
    e.preventDefault();
    e.stopPropagation();
    dragEnterCount--;
    if (dragEnterCount <= 0) {
      dragEnterCount = 0;
      resetDropOverlay();
    }
  });

  panel.addEventListener('drop', e => {
    e.preventDefault();
    e.stopPropagation();
    dragEnterCount = 0;

    const files = e.dataTransfer.files;
    if (files.length === 0) { resetDropOverlay(); return; }

    const file = files[0];
    if (!file.name.endsWith('.bs')) {
      showStatus('Please drop a .bs file', true);
      resetDropOverlay();
      return;
    }

    const reader = new FileReader();
    reader.onload = function(evt) {
      const content = evt.target.result;
      showDropPreview(file.name, content);
    };
    reader.readAsText(file);
  });

  (function setupDropImage() {
    const img = document.getElementById('ai2xt-drop-img');
    if (!img) return;
    img.src = AI2XT_IMGS.dropImage;
  })();

  console.log('[BlockScript Injector] Ready.');

})();
