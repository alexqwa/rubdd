import dayjs from "dayjs"
import updateLocale from "dayjs/plugin/updateLocale"
import "dayjs/locale/pt-br"

dayjs.locale("pt-br")
dayjs.extend(updateLocale)
dayjs.updateLocale("pt-br", {
  weekdays: [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ],
})
