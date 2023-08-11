
chrome.tabs.executeScript({
            code: '(' + function() {
              document.addEventListener("click", function(event) {
                let bodyStyle = window.getComputedStyle(document.body, null);

               
                let clickedElement = event.target;
                let selectedValue = window.getComputedStyle(clickedElement);
                let backgroundColor = selectedValue.backgroundColor;
                let color = selectedValue.color;
                let font = selectedValue.fontFamily;
                let fontSize = selectedValue.fontSize;
                let fontWeight = selectedValue.fontWeight;
                let fontStyle = selectedValue.fontStyle;
                let textDecoration = selectedValue.textDecoration;
                let textTransform = selectedValue.textTransform;
                let letterSpacing = selectedValue.letterSpacing;
                let background = bodyStyle.background;

                
                let filteredData = {
                    backgroundColor: backgroundColor !== 'undefined' ? backgroundColor : null,
                    color: color !== 'undefined' ? color : null,
                    font: font !== 'undefined' ? font : null,
                    fontSize: fontSize !== 'undefined' ? fontSize : null,
                    fontWeight: fontWeight !== 'undefined' ? fontWeight : null,
                    fontStyle: fontStyle !== 'undefined' ? fontStyle : null,
                    textDecoration: textDecoration !== 'undefined' ? textDecoration : null,
                    textTransform: textTransform !== 'undefined' ? textTransform : null,
                    letterSpacing: letterSpacing !== 'undefined' ? letterSpacing : null,
                    background: background !== 'undefined' ? background : null,

                  };
                

               
                const popupOptions = "width=300,height=300,resizable=no";
                const popupWindow = window.open("", "PopupWindow", popupOptions);
                const returnValue = JSON.stringify(filteredData, null, 4)

                popupWindow.document.write("<pre>" + returnValue + "</pre>");

              });
            } + ')();'
          });




