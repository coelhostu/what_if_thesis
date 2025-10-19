(function() {
    function initTransitions() {
        const style = document.createElement('style');
        style.textContent = `
            body, html { background: #fff !important; }
            #div_Slide { background: #fff !important; }
            
            /* Botões com border-radius */
            button, .cp-button, [id*="Button"], [id*="button"], 
            input[type="button"], input[type="submit"], input[type="reset"],
            .playImage, #playImage, [id*="Play"], [id*="play"],
            .cp-shape-button, [class*="button"], [class*="Button"] {
                border-radius: 10px !important;
            }
            
            /* Setas com nova cor */
            [id*="Forward"], [id*="Backward"], [id*="Arrow"], [id*="arrow"],
            [class*="arrow"], [class*="Arrow"], .cp-arrow,
            #prevImageDiv, #nextImageDiv {
                filter: hue-rotate(180deg) !important;
            }
            
            /* Cursor personalizado */
            body, #div_Slide, .cp-movie, #project {
                cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><polygon fill="%23ff6b35" points="0,0 0,16 6,12 10,20 12,19 8,11 16,11"/></svg>'), auto !important;
            }
            

        `;
        document.head.appendChild(style);
        
        const observer = new MutationObserver(() => {
            document.head.appendChild(style);
        });
        
        observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true
        });
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTransitions);
    } else {
        initTransitions();
    }
})();