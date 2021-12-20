import React from 'react'
import { SvgWrapper } from '../utilities'

interface Props {
    color?: string,
    type: 'symbol' | 'text' | 'lockup',
    width?: string,
}

export const Logo = ({
    width, 
    color = 'black',
    type = 'symbol'
}: Props) => {
    function logoRender(type: string) {
        switch(type) {
            case 'symbol': 
                return (
                    <SvgWrapper
                        width={width}
                        viewBox="0 0 250 250"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        css={{
                            '> *': {
                                fill: `${color}`
                            }
                        }}
                    >
                        <path 
                            d="M176.652 143.385C176.652 143.385 180.226 131.888 191.402 120.543C200.312 111.477 220.8 96.1305 220.8 96.1305C220.8 96.1305 220.8 153.059 220.8 153.009C220.8 206.594 177.659 250 124.4 250C71.1408 250 28 206.544 28 153.009C28 100.132 66.1572 67.5142 98.173 60.0689C150.878 47.812 148.412 122.265 148.412 122.265C142.824 117.96 131.85 114.769 124.652 114.769C103.811 114.769 86.897 131.787 86.897 152.755C86.897 173.724 103.811 190.741 124.652 190.741C145.492 190.741 162.406 173.724 162.406 152.755V0C162.406 0.151945 224.978 15.1945 220.8 57.4858C218.685 78.8594 193.113 96.8902 183.196 114.465C173.481 131.635 176.652 143.385 176.652 143.385Z" fill={color} />
                    </SvgWrapper>
                )
            case 'text':
                return (
                    <SvgWrapper
                        width={width}
                        viewBox="0 0 1000 100"
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        css={{
                            '> *': {
                                fill: `${color}`
                            }
                        }}
                    >
                        <path d="M26.645 76.9231C49.2988 76.9231 64.4012 63.7363 64.4012 38.4615C64.4012 13.1868 48.7594 0 26.1057 0H0.215698V76.9231H26.645ZM14.7788 13.1868H25.0269C39.59 13.1868 49.8381 19.2308 49.8381 38.4615C49.8381 57.6923 39.59 63.7363 25.0269 63.7363H14.7788V13.1868Z" fill={color}/>
                        <path d="M100.184 78.022C116.365 78.022 127.152 65.9341 127.152 49.4506C127.152 32.967 116.365 20.8791 100.184 20.8791C84.0024 20.8791 73.215 32.967 73.215 49.4506C73.215 65.9341 84.0024 78.022 100.184 78.022ZM99.7522 66.4835C92.2009 66.4835 87.3466 60.2198 87.3466 49.4506C87.3466 38.6813 92.2009 32.4176 99.7522 32.4176H100.615C108.166 32.4176 113.021 38.6813 113.021 49.4506C113.021 60.2198 108.166 66.4835 100.615 66.4835H99.7522Z" fill={color}/>
                        <path d="M189.658 62.4176L180.273 21.978H165.279L156.541 62.7473L145.753 21.978H131.622L148.126 76.9231H163.876L172.83 38.4615L182.323 76.9231H198.073L213.499 21.978H199.906L189.658 62.4176Z" fill={color}/>
                        <path d="M236.693 76.9231V46.3736C236.693 38.6813 241.871 32.4176 248.344 32.4176H249.207C254.601 32.4176 257.729 36.2637 257.729 43.4066V76.9231H271.753V41.7582C271.753 29.6703 265.927 20.8791 252.983 20.8791C245.971 20.8791 239.93 24.5055 236.693 30V21.978H222.67V76.9231H236.693Z" fill={color}/>
                        <path d="M315.225 78.022C330.866 78.022 339.173 64.2857 339.173 49.4506C339.173 34.6154 330.866 20.8791 315.225 20.8791C307.673 20.8791 301.848 25.2747 299.691 29.1209V0H285.667V76.9231H299.691V69.7802C301.848 73.6264 307.673 78.022 315.225 78.022ZM311.988 66.4835C305.516 66.4835 299.691 59.8901 299.691 49.4506C299.691 39.011 305.516 32.4176 311.988 32.4176H312.851C319.863 32.4176 325.149 38.9011 325.149 49.3407C325.149 59.7802 319.863 66.4835 312.851 66.4835H311.988Z" fill={color}/>
                        <path d="M373.109 78.022C386.593 78.022 394.899 70.3297 397.488 59.5604H383.573C382.602 63.2967 379.365 66.4835 374.08 66.4835H373.217C367.391 66.4835 361.566 61.5385 361.027 53.956H397.488C397.596 52.1978 397.704 50.4396 397.704 48.7912C397.704 32.8571 389.29 20.8791 373.109 20.8791C356.928 20.8791 347.435 32.967 347.435 49.4506C347.435 67.5824 359.624 78.022 373.109 78.022ZM361.027 42.967C361.35 36.3736 366.313 32.4176 372.138 32.4176H373.001C378.826 32.4176 383.788 36.3736 384.112 42.967H361.027Z" fill={color}/>
                        <path d="M423.907 78.022C430.919 78.022 436.636 74.9451 439.872 70.2198C439.98 72.7473 440.196 75.2747 440.52 76.9231H453.68C453.141 73.0769 453.141 68.1319 453.141 64.8352V40.6593C453.141 27.8022 443.972 20.8791 430.487 20.8791C417.003 20.8791 408.373 28.6813 407.294 39.011H421.318C421.641 35.8242 424.77 32.4176 430.056 32.4176H430.919C436.205 32.4176 439.549 36.2637 439.549 41.2088V42.5275L425.956 43.7363C415.277 44.6154 406.215 50 406.215 61.8681C406.215 71.7582 414.198 78.022 423.907 78.022ZM426.712 66.4835C422.936 66.4835 420.023 64.2857 420.023 60.8791C420.023 56.3736 424.338 54.5055 427.898 54.1758L439.549 52.967V54.5055C439.549 61.6484 433.831 66.4835 427.575 66.4835H426.712Z" fill={color}/>
                        <path d="M500.199 76.9231V64.8352H492.432C487.577 64.8352 486.499 63.7363 486.499 58.7912V33.5165H498.581V21.978H486.499V4.17582H472.475V21.978H461.364V33.5165H472.475V62.6374C472.475 71.978 477.329 76.9231 486.499 76.9231H500.199Z" fill={color}/>
                        <path d="M602.271 76.9231L573.145 0H556.101L526.219 76.9231H541.538L548.334 58.7912H580.049L586.845 76.9231H602.271ZM564.191 16.4835L575.087 45.6044H553.296L564.191 16.4835Z" fill={color}/>
                        <path d="M632.161 78.022C646.185 78.022 655.354 71.4286 656.433 57.6923H642.409C641.546 63.0769 638.418 66.4835 632.592 66.4835H631.729C623.747 66.4835 620.295 58.7912 620.295 49.4506C620.295 40.1099 623.747 32.4176 631.729 32.4176H632.592C638.418 32.4176 641.546 35.8242 642.409 41.2088H656.433C655.354 27.4725 646.185 20.8791 632.161 20.8791C617.598 20.8791 606.271 31.8681 606.271 49.4506C606.271 67.033 617.598 78.022 632.161 78.022Z" fill={color}/>
                        <path d="M682.006 78.022C689.018 78.022 694.735 74.9451 697.971 70.2198C698.079 72.7473 698.295 75.2747 698.619 76.9231H711.779C711.24 73.0769 711.24 68.1319 711.24 64.8352V40.6593C711.24 27.8022 702.071 20.8791 688.586 20.8791C675.102 20.8791 666.472 28.6813 665.393 39.011H679.417C679.74 35.8242 682.869 32.4176 688.155 32.4176H689.018C694.304 32.4176 697.648 36.2637 697.648 41.2088V42.5275L684.056 43.7363C673.376 44.6154 664.314 50 664.314 61.8681C664.314 71.7582 672.297 78.022 682.006 78.022ZM684.811 66.4835C681.035 66.4835 678.122 64.2857 678.122 60.8791C678.122 56.3736 682.437 54.5055 685.997 54.1758L697.648 52.967V54.5055C697.648 61.6484 691.93 66.4835 685.674 66.4835H684.811Z" fill={color}/>
                        <path d="M746.098 78.022C753.649 78.022 759.474 73.6264 761.632 69.7802V76.9231H775.656V0H761.632V29.1209C759.474 25.2747 753.649 20.8791 746.098 20.8791C730.456 20.8791 722.15 34.6154 722.15 49.4506C722.15 64.2857 730.456 78.022 746.098 78.022ZM748.471 66.4835C741.459 66.4835 736.173 59.7802 736.173 49.3407C736.173 38.9011 741.459 32.4176 748.471 32.4176H749.334C755.807 32.4176 761.632 39.011 761.632 49.4506C761.632 59.8901 755.807 66.4835 749.334 66.4835H748.471Z" fill={color}/>
                        <path d="M812.72 78.022C826.204 78.022 834.511 70.3297 837.1 59.5604H823.184C822.213 63.2967 818.977 66.4835 813.691 66.4835H812.828C807.002 66.4835 801.177 61.5385 800.638 53.956H837.1C837.207 52.1978 837.315 50.4396 837.315 48.7912C837.315 32.8571 828.901 20.8791 812.72 20.8791C796.539 20.8791 787.046 32.967 787.046 49.4506C787.046 67.5824 799.236 78.022 812.72 78.022ZM800.638 42.967C800.961 36.3736 805.924 32.4176 811.749 32.4176H812.612C818.437 32.4176 823.399 36.3736 823.723 42.967H800.638Z" fill={color}/>
                        <path d="M862.979 76.9231V46.3736C862.979 38.6813 868.049 32.967 874.521 32.967H875.384C881.209 32.967 883.798 36.8132 883.798 43.9561V76.9231H897.822V46.3736C897.822 38.6813 902.892 32.967 909.365 32.967H910.228C916.053 32.967 918.534 36.8132 918.534 43.9561V76.9231H932.558V42.3077C932.558 30.2198 927.38 20.8791 913.356 20.8791C906.56 20.8791 899.656 23.6264 895.557 30.3297C892.536 24.0659 886.603 20.8791 879.052 20.8791C873.011 20.8791 866.754 23.5165 862.979 29.7802V21.978H848.955V76.9231H862.979Z" fill={color}/>
                        <path d="M983.542 21.978L969.519 55.3846L954.955 21.978H939.206L962.722 72.6374V80.7692C962.722 85.7143 961.644 86.8132 956.789 86.8132H942.442V99.1209H962.075C971.244 99.1209 976.099 94.1758 976.099 84.8352V72.0879L999.076 21.978H983.542Z" fill={color}/>
                    </SvgWrapper>
                )
            case 'lockup':
                return (
                    <SvgWrapper
                        width={width}
                        viewBox="0 0 1244 200"
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        css={{
                            '> *': {
                                fill: `${color}`
                            }
                        }}
                    >
                        <path d="M141.322 114.708C141.322 114.708 144.181 105.511 153.121 96.4344C160.249 89.1815 176.64 76.9044 176.64 76.9044C176.64 76.9044 176.64 122.447 176.64 122.407C176.64 165.276 142.127 200 99.5199 200C56.9127 200 22.4 165.235 22.4 122.407C22.4 80.1054 52.9258 54.0113 78.5385 48.0551C120.703 38.2496 118.729 97.812 118.729 97.812C114.259 94.3679 105.48 91.8152 99.7213 91.8152C83.0489 91.8152 69.5176 105.429 69.5176 122.204C69.5176 138.979 83.0489 152.593 99.7213 152.593C116.394 152.593 129.925 138.979 129.925 122.204V0C129.925 0.121556 179.982 12.1556 176.64 45.9887C174.948 63.0875 154.49 77.5122 146.557 91.5721C138.785 105.308 141.322 114.708 141.322 114.708Z" fill={color} />
                        <path d="M256.645 138.923C279.299 138.923 294.401 125.736 294.401 100.462C294.401 75.1868 278.759 62 256.106 62H230.216V138.923H256.645ZM244.779 75.1868H255.027C269.59 75.1868 279.838 81.2308 279.838 100.462C279.838 119.692 269.59 125.736 255.027 125.736H244.779V75.1868Z" fill={color} />
                        <path d="M330.184 140.022C346.365 140.022 357.152 127.934 357.152 111.451C357.152 94.967 346.365 82.8791 330.184 82.8791C314.002 82.8791 303.215 94.967 303.215 111.451C303.215 127.934 314.002 140.022 330.184 140.022ZM329.752 128.484C322.201 128.484 317.347 122.22 317.347 111.451C317.347 100.681 322.201 94.4176 329.752 94.4176H330.615C338.166 94.4176 343.021 100.681 343.021 111.451C343.021 122.22 338.166 128.484 330.615 128.484H329.752Z" fill={color} />
                        <path d="M419.658 124.418L410.273 83.978H395.279L386.541 124.747L375.753 83.978H361.622L378.126 138.923H393.876L402.83 100.462L412.323 138.923H428.073L443.499 83.978H429.906L419.658 124.418Z" fill={color} />
                        <path d="M466.693 138.923V108.374C466.693 100.681 471.871 94.4176 478.344 94.4176H479.207C484.601 94.4176 487.729 98.2637 487.729 105.407V138.923H501.753V103.758C501.753 91.6703 495.927 82.8791 482.983 82.8791C475.971 82.8791 469.93 86.5055 466.693 92V83.978H452.67V138.923H466.693Z" fill={color} />
                        <path d="M545.225 140.022C560.866 140.022 569.173 126.286 569.173 111.451C569.173 96.6154 560.866 82.8791 545.225 82.8791C537.673 82.8791 531.848 87.2747 529.691 91.1209V62H515.667V138.923H529.691V131.78C531.848 135.626 537.673 140.022 545.225 140.022ZM541.988 128.484C535.516 128.484 529.691 121.89 529.691 111.451C529.691 101.011 535.516 94.4176 541.988 94.4176H542.851C549.863 94.4176 555.149 100.901 555.149 111.341C555.149 121.78 549.863 128.484 542.851 128.484H541.988Z" fill={color} />
                        <path d="M603.109 140.022C616.593 140.022 624.899 132.33 627.488 121.56H613.573C612.602 125.297 609.365 128.484 604.08 128.484H603.217C597.391 128.484 591.566 123.538 591.027 115.956H627.488C627.596 114.198 627.704 112.44 627.704 110.791C627.704 94.8571 619.29 82.8791 603.109 82.8791C586.928 82.8791 577.435 94.967 577.435 111.451C577.435 129.582 589.624 140.022 603.109 140.022ZM591.027 104.967C591.35 98.3736 596.313 94.4176 602.138 94.4176H603.001C608.826 94.4176 613.788 98.3736 614.112 104.967H591.027Z" fill={color} />
                        <path d="M653.907 140.022C660.919 140.022 666.636 136.945 669.872 132.22C669.98 134.747 670.196 137.275 670.52 138.923H683.68C683.141 135.077 683.141 130.132 683.141 126.835V102.659C683.141 89.8022 673.972 82.8791 660.487 82.8791C647.003 82.8791 638.373 90.6813 637.294 101.011H651.318C651.641 97.8242 654.77 94.4176 660.056 94.4176H660.919C666.205 94.4176 669.549 98.2637 669.549 103.209V104.527L655.956 105.736C645.277 106.615 636.215 112 636.215 123.868C636.215 133.758 644.198 140.022 653.907 140.022ZM656.712 128.484C652.936 128.484 650.023 126.286 650.023 122.879C650.023 118.374 654.338 116.506 657.898 116.176L669.549 114.967V116.505C669.549 123.648 663.831 128.484 657.575 128.484H656.712Z" fill={color} />
                        <path d="M730.199 138.923V126.835H722.432C717.577 126.835 716.499 125.736 716.499 120.791V95.5165H728.581V83.978H716.499V66.1758H702.475V83.978H691.364V95.5165H702.475V124.637C702.475 133.978 707.329 138.923 716.499 138.923H730.199Z" fill={color} />
                        <path d="M832.271 138.923L803.145 62H786.101L756.219 138.923H771.538L778.334 120.791H810.049L816.845 138.923H832.271ZM794.191 78.4835L805.087 107.604H783.296L794.191 78.4835Z" fill={color} />
                        <path d="M862.161 140.022C876.185 140.022 885.354 133.429 886.433 119.692H872.409C871.546 125.077 868.418 128.484 862.592 128.484H861.729C853.747 128.484 850.295 120.791 850.295 111.451C850.295 102.11 853.747 94.4176 861.729 94.4176H862.592C868.418 94.4176 871.546 97.8242 872.409 103.209H886.433C885.354 89.4725 876.185 82.8791 862.161 82.8791C847.598 82.8791 836.271 93.8681 836.271 111.451C836.271 129.033 847.598 140.022 862.161 140.022Z" fill={color} />
                        <path d="M912.006 140.022C919.018 140.022 924.735 136.945 927.971 132.22C928.079 134.747 928.295 137.275 928.619 138.923H941.779C941.24 135.077 941.24 130.132 941.24 126.835V102.659C941.24 89.8022 932.071 82.8791 918.586 82.8791C905.102 82.8791 896.472 90.6813 895.393 101.011H909.417C909.74 97.8242 912.869 94.4176 918.155 94.4176H919.018C924.304 94.4176 927.648 98.2637 927.648 103.209V104.527L914.056 105.736C903.376 106.615 894.314 112 894.314 123.868C894.314 133.758 902.297 140.022 912.006 140.022ZM914.811 128.484C911.035 128.484 908.122 126.286 908.122 122.879C908.122 118.374 912.437 116.506 915.997 116.176L927.648 114.967V116.505C927.648 123.648 921.93 128.484 915.674 128.484H914.811Z" fill={color} />
                        <path d="M976.098 140.022C983.649 140.022 989.474 135.626 991.632 131.78V138.923H1005.66V62H991.632V91.1209C989.474 87.2747 983.649 82.8791 976.098 82.8791C960.456 82.8791 952.15 96.6154 952.15 111.451C952.15 126.286 960.456 140.022 976.098 140.022ZM978.471 128.484C971.459 128.484 966.173 121.78 966.173 111.341C966.173 100.901 971.459 94.4176 978.471 94.4176H979.334C985.807 94.4176 991.632 101.011 991.632 111.451C991.632 121.89 985.807 128.484 979.334 128.484H978.471Z" fill={color} />
                        <path d="M1042.72 140.022C1056.2 140.022 1064.51 132.33 1067.1 121.56H1053.18C1052.21 125.297 1048.98 128.484 1043.69 128.484H1042.83C1037 128.484 1031.18 123.538 1030.64 115.956H1067.1C1067.21 114.198 1067.32 112.44 1067.32 110.791C1067.32 94.8571 1058.9 82.8791 1042.72 82.8791C1026.54 82.8791 1017.05 94.967 1017.05 111.451C1017.05 129.582 1029.24 140.022 1042.72 140.022ZM1030.64 104.967C1030.96 98.3736 1035.92 94.4176 1041.75 94.4176H1042.61C1048.44 94.4176 1053.4 98.3736 1053.72 104.967H1030.64Z" fill={color} />
                        <path d="M1092.98 138.923V108.374C1092.98 100.681 1098.05 94.967 1104.52 94.967H1105.38C1111.21 94.967 1113.8 98.8132 1113.8 105.956V138.923H1127.82V108.374C1127.82 100.681 1132.89 94.967 1139.36 94.967H1140.23C1146.05 94.967 1148.53 98.8132 1148.53 105.956V138.923H1162.56V104.308C1162.56 92.2198 1157.38 82.8791 1143.36 82.8791C1136.56 82.8791 1129.66 85.6264 1125.56 92.3297C1122.54 86.0659 1116.6 82.8791 1109.05 82.8791C1103.01 82.8791 1096.75 85.5165 1092.98 91.7802V83.978H1078.95V138.923H1092.98Z" fill={color} />
                        <path d="M1213.54 83.978L1199.52 117.385L1184.96 83.978H1169.21L1192.72 134.637V142.769C1192.72 147.714 1191.64 148.813 1186.79 148.813H1172.44V161.121H1192.08C1201.24 161.121 1206.1 156.176 1206.1 146.835V134.088L1229.08 83.978H1213.54Z" fill={color} />
                    </SvgWrapper>
                )
        }
    }

    return (<>{logoRender(type)}</>)
}

   