class Resolve {
    constructor (num1 , num2 , opSum , opRes , opMul , opDiv) {
        this.num1 = num1 ;
        this.num2 = num2 ;
        this.opSum = opSum ;
        this.opRes = opRes ;
        this.opMul = opMul ;
        this.opDiv = opDiv ;
    }
}

class UI {
    sumar(num1 , num2) {
        const checkbox = document.getElementById('checkS').checked
        if(checkbox == true) {
            document.getElementById('Sum').value = `${parseInt(num1) + parseInt(num2)}`
        }
    }
    }
    restar(num1 , num2) {
        const checkbox = document.getElementById('checkR').checked
        if(checkbox == true) {
            document.getElementById('Res').value = `${parseInt(num1) - parseInt(num2)}`
        }
    }

    multiplicar(num1 , num2) {
        const checkbox = document.getElementById('checkM').checked
        if(checkbox == true) {
            document.getElementById('Mul').value = `${parseInt(num1) * parseInt(num2)}`
        }
    }

    dividir(num1 , num2) {
        const checkbox = document.getElementById('checkD').checked
        if(checkbox == true) {
            document.getElementById('Div').value = `${parseInt(num1) / parseInt(num2)}`
        }
    }

    message(mensage , codeCss) {
        const div = document.createElement('div') ;
        div.className = `alert alert-${codeCss}`
        let container = document.querySelector('.container')
        let antes = document.querySelector('#antes')

        div.innerHTML = `
        <strong>${mensage}</strong>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close" >
                <span aria-hidden="true">&times;</span>
            </button> 
        `


        container.insertBefore(div , antes)

    }

