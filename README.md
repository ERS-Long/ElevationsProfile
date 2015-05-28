# ElevationsProfile
Based entirely on goriliukasbuxton's approach (issue 378)

Configruation:

            elevation: {
                include: true,
                id: 'elevation',
                type: 'titlePane',
                canFloat: true,
                path: 'widgets/ElevationsProfile',
                title: '<i class="icon-large icon-flag"></i>&nbsp;&nbsp;Elevation',
                open: false,
                position: 15,
                placeAt: 'left', // right or left if type: titlePane, can use top or bottom if type: contentPane
                options: {
                    map: true,
                    mapClickMode: true,
                    defaultLengthUnit: units.MILES                    
                }
            },            


But there is one issue, this widget will conflict with the measure widget. I could not figure out the solution yet.
