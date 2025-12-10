function canviarEstil(element, mouseOver) {
            const textOcult = element.querySelector('.text-ocult');
            
            if (mouseOver) {
                // Quan el ratolí passa per sobre
                element.style.backgroundColor = '#333';
                element.style.color = '#fff';
                textOcult.style.display = 'block';
            } else {
                // Quan el ratolí surt
                element.style.backgroundColor = '';
                element.style.color = '';
                textOcult.style.display = 'none';
            }
        }