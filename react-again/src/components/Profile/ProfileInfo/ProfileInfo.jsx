import Preloader from '../../common/Preloader';
import ProfileStatus from '../ProfileStatus/ProfileStatus';
import ProfileStatusWithHooks from '../ProfileStatus/ProfileStatusWithHooks';
import s from './ProfileInfo.module.css'


const ProfileInfo = (props) =>{

    if (!props.profile){
        return <Preloader />
    }
    return (
        <div>
            {/* <div className={s.profImage}>
                <img className={s.img}
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEhMWFRUVFRUVFRcVFxYYFRUVFRUWFhUXFRgYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0mHx8tLS0tLS0vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAECBQAGB//EAD8QAAEDAQUGAwYEBQMEAwAAAAEAAhEDBBIhMVEFQWFxgZETobEUIkJSwdEGMuHwFWJykqKC0vEWQ1PCByMz/8QAGAEBAQEBAQAAAAAAAAAAAAAAAQACAwT/xAAoEQACAgEEAgEEAgMAAAAAAAAAAQIREgMTITFBUWEEQoHBcbEVIjL/2gAMAwEAAhEDEQA/APAwuUroXM95EKYUXVYNQNnXVFxWUqGwdxd4aKAuIUVg/DUhi4v4KPEO4KorLXFNxUL3aKRUOiaAtcXXVwJVrpURFxQWI7QuLUFQuaam4jspnerCmkhe4u8NNCmu8NBCwapuJnw13hqIWuLriZuLriiFrqm4mPDXXFCL3V1xMXFFxBAQFMIt1QWoEGWhdcCJdUXVEUujRddGivCiFEVuBRdCtC6FBZW6F10KYXQorAwuhUFcKRWC0ZJAVrq4PGqsI1RY0UuqQ0qfECgVAki1wKRSQXVNFwqOTRDIYrtphAZUcjMfxRQhLig0gFIfzXEBQ0cG6QriNQoaxGZSCjQBy68jlnBQKMqCgMq7QdEX2cqvgOUOJVzgEPx28UXwFPsgUWIv7QNCris1XdZArMsQKLRYFWOad4RRSU/w9EFiVaLECaaE54G4po2I6qhsbt2PZFocWLh44qwx3Hsj07M/kjimd8Ichw9iJC66nvBCg0As5DgIFqi6nTQCqaYVmGAndVS1NuYFBYE5BiKXVFxMlgUXRqrIMRcsUXUYwowVYYoxSuDkQyc1FxdbOdEByu16i6rtZqqxSZwcFyK2iEVtELORtQF28kVpGiZZQ4K4ohWRYAA7grtHBNMsyI2zpyNKACnyR2tCMyy8EwLIOKzkjagxVtMIns3FNMsp0R2WY6IbRpRfozfZVYWRy1mWPgUw2xrLmaUEYjbO4K4s55rZ9j4ojbKFlzY0jF9jKsLCdVs+CFN3gi5B/qZHsSI2xrSLVEKqRZIRFmKt4CcIKrdKsWGaEKliBOZVPYm6laJpqhprWPyZyEDZRqoNEap000N1NWPyWQm6mENzE46mhuppoy2JOahuanHMQnMUAo5qoQmnMQ3NSAsQqkI5ahuaoAJCiEQhVhQCgpKwpcFYPVg5HJq0U8DgpFAaIl4K7XK5GyraKKyjxVmlFa5XJWiGUuKZp0ghis0IntTRx5KpsVJIYZQCZpWcLO9uO4QmrNbfmHZGDNKZoMojRM06LdEk22DcCfJOUrUzWFYGsmHbTGiuGhUNdoEyEI29g1VgGbGIUpR20hp5qTtFuhTh8Bb9jcKLqWZbMd0aLRphrm3gVltI1i2L3FFxGwUwmzNAPDUeGjqYVZUL+Gu8NL23abGSBi7yBWRW2lUPxRywW1Fsy6N7w1U01gN2lUHxHDVSdp1fm8gnBhZtOYhuYkaO1CB7wkqo2tji3Dhms4sRtzEJzFX+IsOvZFa4OyMrL4GhZzEFzE28ILgqyoVc1Cc1MuCC4KsBdwQ3BHcENwTZmgDgqwiuCpCioyb4V2xqlwrBdKOYy2EUXUqCrBFGhxlQKKlb5UFjVfwzorg1TJDiiNXMpFMUqS1ZKLOphNU1ZlHBWbTOiLNqJcK4cuZQdoUUWd2h7KyRrBlL5XSieCdCpFI6FOSLBgwoMphtI6J/ZuzXPdF3GCuc9VRVs3HSszWsI3o9Nx1XrLB+F7wmo0jqnaX4Tpk4hw6ryS+s00ZcoR8nhX1HTjKk214EAx6r1e3tiUmXQ0kYfUrFGzwN8rrp60ZK6NpJq0+zHp2ggyZPVHq7Zf8AC0DniVpOsDUB2y+S6bkX2g2vTMGo4kknM4lV8M6L0TdlNRKezwMo7J3vRLRXlnmfDUXF7BtmbvEqfZ2fKOyN9+ielH2eMLCrU7M45BetdZWfK3su8MDdCHrP0ShE89S2YRBcmatUMaYHLSVqOaEvXpNdgQueTb5NcJUjBrbSduACUfbqmvkFvPsbPlCA+w0/lXRTXo5uN+TDNuqR+iA61VPmK3XWJny+qEbKwfCFZr0Zx+TDNofqUxStc4EHotF1JugQvDAyCnO/BYi3ijJTCIQNFQosGkYAqN1/f1V2uGq87ZrW/J4JGu8c9U/TtlOIveToPlgu7TR5I6iZs02A5EI7KSxm3TiHtx4hFo20NMF4+nVZtnVTRuU2hMsKzrNUDsWvB4TK0KLD+/0XNyj5OyyfQwwN0R2MbogNpvGbZ/pxU+0tGcjm0/RKcX0ybku0aNM7kemAs+ja2HJw6mPVOUng5EHktYEtUcBVg06oLSiByMDW6GDeKuIS95deVtlvMYaeKbsFt8N4cNxWbeXXkPSTVMt1n0rZ9vZUaIO7LeFa1bQYwYn98l8udtNrPjjkZPkl6m3wfnPb7ry/4/nvg8+Olds9RtXaXiPJ3JDxVhnbLNHdv1Vm7Wafhd2/VeqOjiqO26ukbfirvFWXTtrTqOYKYZJyBPQqcUhzbHPFU+KlC074H9RA9SlLdtGnTH5g53ytx7nIIqLdJi3JK2a3iqfFXl27VqkT7vLHDSST++CWO2aznQwt4mMPMrSgjL1KPXOqobqq84NrPykOIzgR0GKszadQ5tAHVYpGrbNx1VCdVXnxtl73XWNbG8mfQFWr2qoTDT2aceV7AJaS7BSb6Nh9VK17W1uZA4b+yy6pfk57ukTywH0QAwDIdSdeCw2vBqn5HK20vlaSk620amQa3ljKq+dDA3nAcUtwHkMJQmTLO2jV33Brg4n1VX7RfoBxOHYFVczX9emiXfjljzHpuWkc3wS+21D8XkEu+2VJ/Moquzj79uKA4AYfdbSOTZ5mnVI34ceympUM45rSr7KaDmY5g/RK1LI0GC/0w+y9No8LjJEWWs3J7ZGowI4wIlFs9og4+83Q+XJTSsLTk+eUdE6bIwjBpw/MMiBqIMfvJDaNKMg9l8IkhwgRMjNvEje3itGnVewwXXtJkGNxByeFj33MODiZ3BoHQiI8lalaGDAtAnMe/nwxXNxs7xnR6Gy7QfxngcRynNPDbL2/nExuLfXIjusNllDxLZGm53OCSCORBUVbWWNu1TLh+UtJDgOcYrntxb6O61ZJdnom7Qs7j79MsnJwwHYpxtioHEVB1B+i8r/HBAi8Y3Pg46k7+yI/bjzFxoaeTfLUrL0peOPyaWvH7ufweoqtDIirnli70KTpbUeTDal7TBpK89St1R5kBx+YtEnDoe3ouZfM+9AibsgyP6Ru6dF0jBx7ZmWqpdI9PTttd4lhZAzm6COcnBN0WWp2bQeT6YXjBUphuDrrtRiHagjHjjhyTtm2+WtDW1nMAO5of2LsQOCJKf2/v9FCen939r9ntWbLrO3PH+umfRwVXfhOs4ySSNC5v+4rzlq/GUsuB5G4uYC1zhqJ/L3CyqG3y1wcKtcEZEOae4w9VyjH6j3RuepoXS5Pcj8GVdDyDmfUo1L8HVN9F551Kf8A6keqV2V/8iBrB4gNQjNw92B/O2Y6grd/60D2B1PwgTH/AOlQCBywJXFz+oXDGoP/AJSFP+nHNyss83t+pKsLJVblRY3qPoqVvxRaJn/6C0gYMvOM7/eDsBzWNX/GIe4i5Efzb+Sw46svk9EJxj3S/hGvVFYfHH9N0fVZts8T5nHgC37rKtf4kwMU38Mu8icOizW2+sXBzniN4jADSMyeZC6Q0pLl0U9eHSsftFKqd3+TUnVqNYbriJ7gTy/RWfbHGcSBujBxHMznwhZdem5xwY1owElxk8SZiV6oN9M8mpS5ia595oxAaeI7cSVV1naHQajGjPP3jGpyAxlZ7qoYLodeI/M4iIwyZPTFZVa1yTBMTvOJ4nitRi30zE9SK7XJ6+zupAEA5cRJ447hiuFrpkwRAyghxJ6EALxntC1rHWovaLwN8fmzMjXOeyzPRS5bZqH1N8JJG+2s0/lmBo26hvtg3NM8ACe8rHqW1rQbjSDu/KO0pC0bTrHC8QNAVhaNm5fUUj0LrQZAuvniGj0Kh4dO4dMl56z22qN7hxEHoQ7cptNsqmMARpdGPEiE7XPgzv8AHk3ajDmceJg9tyXrVDOn6csFmMtNYtAbTAAHvOdAaM+OCvZ6Ty0zBkbnSOOBbh/yrbrst2+kM1KgaCSQNSf3mlPa6bjF8HuAe6pUqNZ7ri3hgNdSI7KlN5Jwa2I5HvhPZaUTm5hxB48ioMDP6JapbIMAE9/qIPSVX2kHEuI/fBqcTOaFKdZ926AQN0xIWf7G4kkuE78fqtsMaf8Atg9B9leG53AI0AC2pUcnC+zIpbKccb7ekladmAZm6TxhXNcDOPLzxUNtR1HYKbbGMVHotXqMdg4tndLnAjzQvZKesHiT5SEWtDsDdPNo+oxUU23MrvQDzCB7LUXBnxH+4YcROSL/ABFuZeP8Y7IFVlMxLBzF2OWKq6z2cZgTwcY9YVSfY3JdDAt1Kcx5QfJWFSkcYZ2b9kBlhonIH+4eWCt7FSB392z3KuCuXmgdoY95vCo04byG4fVRfe0XnhoIgh596dCS2Z5p81gAADEZfrqUW84xI6gR5yrIsTKaHVDLxVOjgGgdnQPNF/hzTgC9pjN1widIafqtCG5m9PB0fQlKlpgjxiJ+XTQnM91Zegw98iI2XXJgMJ47lYbOcPzSOQ/fomKNndMiq92vvAjjIJTIowIc5pgYe7iBwgnyS5sytNehKhVbSdj4hG+AQJ3RMSfumq9peR7ktBxBETHMgeqBXtNIDB14YAgOgHmAMuaXbtcDCHERADjIhVXzQ5JcWHbtCpF0zjhMYRvmP1RW2iB+bo1rjPIl3rCznbU0Y3zVTtL+QdzCcfgNxezTbVBJgVOpHcbuiJZ7RuAkxjeDp6TAWbT2vHwAck3RtrX6ngTHkFlxZqM0+mMC+i+ET8TehOHOUt4sxmeG7urhzhmCByk9MD5LNG7JfZZxn1A8ktXs9PeAOIP0Kb9ouwJMx8QDcOjZQa9ocTBAI6x3IxSrB0LUPDmLvUmUw+o0bwOuC57Adzct5bnwAxQ6mGAa2NRiR5nzT2C4IqV2HC9Cr4tPK8VVtTS8OgTNG0AHN0RGLj66KLsp4jRESZnOR6wiFx+29Q57JzBnQE+u/orCmTkD1ujyOKBK13EgXmghokAxE6xko9oe4QQCJGH7whEfSAzA/wAVMZe71jJQiNXZt73nVG78GtAPqiWbZ4GF4uGjgCBy0RKrgMczOWGWuJUB/H0lNszjGwhsQG5vYIZsjNGqfEnefJUdHHyQPBnFjj8R7gfRR4R+Yps0G6eauGxuWrMYmf7OZ3HmEQU37wD0P3Twbw8lLaZ0joPsqyxFabXaNbxgfdNMA1HQKxpDeT1lcX0xlj0JQaSoH4DDnj3Kq6xtO4GP6UwwudlI6fqg1LNjL6jjwa36qsGi7bIdxjgLuHPTsmKVibvJ65d8AgNtBAusF397/wBVRlJzj7xcRzz/AERyPBp0mUtzuw+qi8JO79+aCxzQIG7cPuUU2iJLYyjE7t4WTdgqlqblId69xiqvsrXZOz3EfUfZDdVaQcpGhCULm/KejiJ7FaSMtlbVZqjPeAvNGZbiOsZdUmLaePdatK8CMIj+aT91NvstN+N0sdqDM82x9VpP2c5RfaMSs8HEZ+qFK1HbIA+Jw4kNj1S79mumGuDjpBB+q2pI5ShL0JyulGfYaozYUEtIzBHMLVmMWdKlryMlRcSohyltCo34pGjoI805S247J08IOA6LGldeQ4pmlOS8noztFn/kI5SfWUpadsuIutyG90d4GCxyVMoUEaerJjRttQ/GVxttTe6eYBS8qpcmkYyfs0KO0YzaDhEj9VpWKs1zZvSQcGyB3JnyXngov7whxTNx1GuzedbGMzdJO4fUnMcMOSlltY5wJfkIugQOpOSwAoRgh3WenfaKRwvjzPmURgpkYEHjmvJwu8Qjee6MB3vaPWXW8/IBR4YIwjovJmq47ynLPTBAxJOfbmhwo0tW/B6BtlEZdiVV1A/sIdlrMptGAce4k81JtlV2IugcYCzydOBkCIi75SUSTOfkkHOnEAj98UNrzx9EUVmm6mHZ4amUq6z44GepyVG3jgAT6IzaRGYjrCh7B1IA/IOolBFSMZM6Bogckw8t+Yn+nFR4jBu7xhzgJAXdaHH5iBq4wiwSBh/qggR9VV1uaNByAHrKE+3A6ngZPooLQZt1ojCc1Wo8uwHXOFFK1A4Na7owDzTNGg9+N0kaudh6KLsSuE/Fjwx9VIspneesrSFmY3Oo0nQC9HmEwGNa2bx5e60eWJ7oyHEQpWJrBNQZ5e8Z7YFEDRHuU+RIjzP3R6lqbH5GwNBHqUFtsGQnoPqSEcjwipo1JxuNH9X2XGoBgHD/AE4f89USpX1Aj+Y/bBAfbQPl1wxSXBz64yz6YIVS0uOAwHZXpW9rt3l5q5rt4DySAoWHehsa4YZg5746Jl9acGx/cPRBBdkQZSZBeE3exo6BWLKe5jTxuiFNS0MGBGPFUe6RuA/fRQcBKNZo3CBngMfJRUtNN2BYyP6W/ZW8IEQABqgV7GDkCFcC7BVKVI5NI5H9gIbrAPheOR+4+yFUsdQZO74Kl2o3Mjut/k5P5RapYqg+Akatx9EAtjPA8UxQt1QJqlb3O/MBHGCFWwxizLcVAW4H0v8AxU/7R5LrlF2HhtE6YehCsx2/kxJUwvQeyUYwazqXE+ZRKDWti40AjeAOO8IzHaMJtgrOGFN0ccPWEVmw6x3N/uH0XoGvndPLHuqV7REgmOGaM2a2o+TFGxKozu9/0RaFkqAEECN0FuOu/wDcpl7uPkq3uMlVtkopdHGk4ANDTzjAdkYUyMz3S5qEZT0hCdtI/MUUzVpGg20k4NY88mj6ogo1z+VjupA9Grlyw3RtKyPY6++72eSPJQbBVO8dGn/aoXIzHBFTsqp8Tz/kuGyGz7z55OH3lcuSpNg4pDNHZlICb0ToMfISe6YpWenupudxc0R/liuXIbFJDMsGBa3gCRP9rcQhPrHcGwf5Rh3xXLlUVgK1TAYidAAI7BL32jEx1GPdcuWkjLZZ9afgJ6H6lRUdUjIN5CfRcuUIRgMSSXTuMYd0I0wPhE8h+ypXIIhwO8QOCA5g/wCVK5KBgnXN4b2CgBu6VC5aMh2sBiRPPGOKioz+QnoY6LlyLNUXbSd8ncj74rm7OfhkBxXLlnIcSKllc3ENnslq9E7wpXJTBozHWB4ksxHmhVaL2j8rgd+GC5cumRycFQWyU3754SIT9nonMglcuQ2ajEKbMZ3Dqj0qLYzXLlk0SXYQFTAfD1xXLlEDqYY5JV9QDmuXJRlila1cSlHWl2s81y5dUjhKTP/Z"
                    alt="" />
            </div> */}
            <div className={s.profDescription}>
                <div>
                    <span>{props.profile.fullName}</span>
                </div>
                <div>
                    <img src={props.profile.photos.large} alt=""/>
                </div>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
            </div>
      </div>

    )
}

export default ProfileInfo;