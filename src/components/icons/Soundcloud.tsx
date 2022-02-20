import * as React from 'react'
import { IconProps } from './types'
import { IconWrapper } from './IconWrapper'

export const Soundcloud = React.forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', size, ...props }, forwardedRef) => {
        return (
            <IconWrapper
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                size={size}
                color={color}
                css={{
                    '> *': {
                        fill: `${color}`,
                    },
                }}
                {...props}
                ref={forwardedRef}
            >
                <path d="M1.98066 8.12533C1.95333 8.12533 1.92866 8.15067 1.92533 8.18L1.796 9.378L1.92533 10.5487C1.92866 10.5813 1.95333 10.6033 1.98066 10.6033C2.008 10.6033 2.03066 10.5813 2.03666 10.5487L2.17733 9.378L2.02733 8.18C2.02733 8.14933 2.00266 8.12533 1.978 8.12533H1.98066ZM1.478 8.586C1.444 8.586 1.42733 8.606 1.41933 8.63867L1.32733 9.378L1.41933 10.106C1.41933 10.1367 1.444 10.158 1.46933 10.158C1.49533 10.158 1.518 10.1327 1.52733 10.1L1.64466 9.36667L1.52733 8.62533C1.52733 8.59133 1.50266 8.57467 1.47733 8.57467L1.478 8.586ZM2.49466 7.89133C2.46 7.89133 2.428 7.91733 2.428 7.94933L2.31066 9.37533L2.436 10.7427C2.436 10.7753 2.46066 10.8093 2.502 10.8093C2.53666 10.8093 2.56133 10.7753 2.57 10.7427L2.71066 9.36667L2.57 7.94933C2.56133 7.91667 2.53533 7.88267 2.502 7.88267L2.49466 7.89133ZM3.02866 7.83267C2.98666 7.83267 2.95266 7.86667 2.94466 7.908L2.83733 9.37533L2.95533 10.7907C2.96333 10.8327 2.996 10.8667 3.03666 10.8667C3.07933 10.8667 3.112 10.8327 3.12 10.784L3.254 9.37533L3.12 7.91733C3.12018 7.90754 3.11839 7.8978 3.11474 7.8887C3.11109 7.87961 3.10566 7.87134 3.09876 7.86438C3.09186 7.85742 3.08364 7.85191 3.07458 7.84818C3.06552 7.84445 3.0558 7.84258 3.046 7.84267L3.02866 7.83267V7.83267ZM3.67 8.03333C3.66974 8.02201 3.66723 8.01085 3.66262 8.00051C3.65801 7.99017 3.65138 7.98084 3.64313 7.97309C3.63487 7.96533 3.62516 7.95929 3.61455 7.95533C3.60394 7.95137 3.59265 7.94956 3.58133 7.95C3.5583 7.94943 3.53594 7.95779 3.51892 7.97331C3.5019 7.98884 3.49154 8.01035 3.49 8.03333L3.36866 9.384L3.48133 10.8093C3.48124 10.8209 3.48346 10.8323 3.48786 10.843C3.49226 10.8537 3.49875 10.8634 3.50695 10.8715C3.51514 10.8797 3.52489 10.8861 3.5356 10.8904C3.54631 10.8947 3.55778 10.8968 3.56933 10.8967C3.61066 10.8967 3.65133 10.86 3.65133 10.8087L3.77733 9.38267L3.65133 8.02533L3.67 8.03333V8.03333ZM4.11933 7.08267C4.09326 7.08368 4.06854 7.09457 4.05022 7.11315C4.03189 7.13172 4.02132 7.15658 4.02066 7.18267L3.90333 9.38267L4.00733 10.8087C4.00733 10.86 4.05133 10.9 4.10733 10.9C4.15933 10.9 4.204 10.8507 4.20733 10.8L4.32333 9.37533L4.208 7.16667C4.20333 7.108 4.15866 7.06533 4.108 7.06533L4.11933 7.08267ZM4.64133 6.55733C4.61245 6.55853 4.58499 6.57023 4.56412 6.59024C4.54326 6.61025 4.53041 6.63719 4.528 6.666L4.428 9.37467L4.52 10.7913C4.52 10.858 4.57 10.9073 4.62866 10.9073C4.686 10.9073 4.736 10.858 4.74466 10.7913L4.85266 9.37467L4.74533 6.67333C4.73666 6.60667 4.68666 6.55667 4.62866 6.55667L4.64133 6.55733ZM5.17933 6.30867C5.11133 6.30867 5.062 6.35733 5.054 6.424L4.96133 9.35733L5.054 10.7587C5.062 10.8253 5.11133 10.884 5.17933 10.884C5.21219 10.883 5.24341 10.8694 5.2666 10.8461C5.28978 10.8228 5.30316 10.7915 5.304 10.7587L5.41266 9.35733L5.30333 6.424C5.30333 6.35733 5.24533 6.29867 5.178 6.29867L5.17933 6.30867ZM5.87 6.324C5.87027 6.3065 5.86702 6.28913 5.86045 6.27291C5.85388 6.2567 5.84412 6.24196 5.83174 6.22959C5.81937 6.21722 5.80464 6.20745 5.78842 6.20088C5.7722 6.19431 5.75483 6.19106 5.73733 6.19133C5.70223 6.192 5.66873 6.20616 5.64379 6.23086C5.61884 6.25556 5.60435 6.28891 5.60333 6.324L5.52 9.34933L5.60266 10.742C5.61266 10.816 5.67 10.8747 5.74533 10.8747C5.82066 10.8747 5.87933 10.816 5.87933 10.742L5.97 9.34933L5.87933 6.316L5.87 6.324V6.324ZM6.28666 6.25C6.21133 6.25 6.14466 6.31667 6.14466 6.39067L6.06133 9.35L6.14466 10.7253C6.14466 10.8087 6.21133 10.8673 6.28666 10.8673C6.32527 10.8661 6.36186 10.8498 6.38854 10.8218C6.41523 10.7939 6.42987 10.7566 6.42933 10.718L6.51266 9.342L6.41933 6.39C6.41933 6.30867 6.35266 6.24 6.26933 6.24L6.28666 6.25ZM6.828 6.33267C6.80722 6.33258 6.78664 6.33661 6.76743 6.34451C6.74822 6.35242 6.73077 6.36406 6.71608 6.37875C6.70139 6.39344 6.68975 6.41089 6.68185 6.4301C6.67394 6.44931 6.66991 6.46989 6.67 6.49067L6.61266 9.35067L6.688 10.726C6.688 10.8087 6.75466 10.88 6.84533 10.88C6.92866 10.88 6.99666 10.8133 7.00333 10.722L7.07066 9.36333L6.996 6.52C6.98933 6.42867 6.92066 6.36133 6.838 6.36133L6.828 6.33267ZM7.49666 5.83733C7.46857 5.82088 7.43655 5.81236 7.404 5.81267C7.37066 5.81267 7.33733 5.82133 7.31266 5.83733C7.28757 5.85182 7.26669 5.8726 7.25207 5.89761C7.23746 5.92263 7.22962 5.95103 7.22933 5.98V6.01333L7.172 9.376L7.236 10.738V10.7427C7.24 10.776 7.252 10.8173 7.276 10.8427C7.30933 10.8767 7.356 10.9 7.40666 10.9C7.45011 10.8977 7.49138 10.8802 7.52333 10.8507C7.53968 10.8342 7.55258 10.8146 7.56128 10.7931C7.56998 10.7716 7.5743 10.7485 7.574 10.7253L7.58266 10.5913L7.64733 9.366L7.572 5.98267C7.57162 5.95615 7.56466 5.93015 7.55175 5.90699C7.53883 5.88383 7.52036 5.86425 7.498 5.85L7.49666 5.83733V5.83733ZM8.05466 5.53267C8.04437 5.52105 8.0316 5.5119 8.01729 5.5059C8.00297 5.4999 7.9875 5.4972 7.972 5.498C7.93057 5.4965 7.88981 5.50868 7.856 5.53267C7.83576 5.54876 7.81929 5.5691 7.80777 5.59226C7.79625 5.61541 7.78996 5.64081 7.78933 5.66667V5.682L7.71333 9.35733L7.75533 10.0333L7.79 10.692C7.79106 10.7404 7.81132 10.7865 7.84633 10.82C7.88133 10.8535 7.92822 10.8717 7.97666 10.8707C8.02511 10.8696 8.07115 10.8493 8.10466 10.8143C8.13816 10.7793 8.15639 10.7324 8.15533 10.684L8.23866 9.342L8.15533 5.65133C8.1546 5.6199 8.14575 5.5892 8.12962 5.56221C8.1135 5.53522 8.09066 5.51287 8.06333 5.49733L8.05466 5.53267ZM13.0313 7.59733C12.8073 7.59733 12.5893 7.64533 12.3987 7.726C12.3582 7.27903 12.2143 6.8476 11.9784 6.46582C11.7424 6.08404 11.4209 5.76239 11.0392 5.52628C10.6576 5.29018 10.2262 5.1461 9.77925 5.10544C9.3323 5.06477 8.88201 5.12865 8.464 5.292C8.33866 5.342 8.31266 5.39267 8.30533 5.49267V10.7007C8.30817 10.7493 8.32813 10.7954 8.36168 10.8308C8.39523 10.8662 8.44021 10.8886 8.48866 10.894H13.04C13.2544 10.8959 13.467 10.8553 13.6655 10.7744C13.864 10.6935 14.0445 10.574 14.1964 10.4228C14.3484 10.2716 14.4688 10.0917 14.5507 9.89356C14.6325 9.69544 14.6742 9.48303 14.6733 9.26867C14.6744 8.83436 14.5029 8.4174 14.1966 8.10949C13.8903 7.80157 13.4743 7.6279 13.04 7.62667" fill={color} />
            </IconWrapper>
        );
    }
)