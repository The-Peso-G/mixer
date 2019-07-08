import { errors } from 'mixer-utils'
import { genValidator } from './utils'

const echo = async ({ message }) => {
    if (message !== '') {
        return { message }
    } else {
        const errorMsg = 'the message param cannot be blank'
        throw {
            code: errors.errorCodes.ECHO_MSG_BLANK,
            message: errorMsg,
            data: errors.genError(
                errors.MixerErrorNames.BACKEND_ECHO_MSG_BLANK,
                errorMsg,
            )
        }
    }
}

const echoRoute = {
    route: echo,
    reqValidator: genValidator('echo'),
}

export default echoRoute