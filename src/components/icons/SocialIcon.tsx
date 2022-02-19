import React from 'react';
import { IconWrapper } from './IconWrapper';

interface Props {
	size?: any;
	icon: string;
	color?: string;
}

export function SocialIcon({ size = 'small', icon, color = '#000000' }: Props) {
	function iconRender(icon: string) {
		switch (icon) {
			case 'facebook':
				return (
					<path d="M16 8.04868C16 3.60243 12.4194 0 8 0C3.58065 0 0 3.60243 0 8.04868C0 12.073 2.90323 15.4158 6.74194 16V10.3854H4.70968V8.04868H6.74194V6.29615C6.74194 4.28398 7.93548 3.14807 9.74194 3.14807C10.6452 3.14807 11.5484 3.31034 11.5484 3.31034V5.29006H10.5484C9.54839 5.29006 9.22581 5.90669 9.22581 6.55578V8.04868H11.4516L11.0968 10.3854H9.22581V16C13.0645 15.4158 16 12.073 16 8.04868Z" />
				);
			case 'twitter':
				return (
					<path d="M14.3718 4.40379C14.998 3.90809 15.5616 3.31325 16 2.61928C15.4364 2.88365 14.7789 3.08193 14.1213 3.14802C14.8102 2.71842 15.3112 2.05749 15.5616 1.23133C14.9354 1.62788 14.2153 1.9253 13.4951 2.09053C12.8689 1.39656 12.0235 1 11.0841 1C9.2681 1 7.79648 2.55318 7.79648 4.46988C7.79648 4.73425 7.82779 4.99862 7.89041 5.26299C5.16634 5.09776 2.72407 3.70981 1.09589 1.62788C0.81409 2.12358 0.657534 2.71842 0.657534 3.37935C0.657534 4.56902 1.22114 5.62651 2.12916 6.25439C1.59687 6.22134 1.06458 6.08916 0.626223 5.82478V5.85783C0.626223 7.5432 1.75342 8.93115 3.25636 9.26162C3.00587 9.32771 2.69276 9.3938 2.41096 9.3938C2.19178 9.3938 2.00391 9.36076 1.78474 9.32771C2.19178 10.7157 3.41292 11.7071 4.85323 11.7401C3.72603 12.6654 2.31703 13.2272 0.782779 13.2272C0.500978 13.2272 0.250489 13.1941 0 13.1611C1.44031 14.1525 3.16243 14.7143 5.0411 14.7143C11.0841 14.7143 14.3718 9.4599 14.3718 4.86644C14.3718 4.7012 14.3718 4.56902 14.3718 4.40379Z" />
				);
			case 'instagram':
				return (
					<path d="M8.01786 3.875C5.73214 3.875 3.91071 5.73214 3.91071 7.98214C3.91071 10.2679 5.73214 12.0893 8.01786 12.0893C10.2679 12.0893 12.125 10.2679 12.125 7.98214C12.125 5.73214 10.2679 3.875 8.01786 3.875ZM8.01786 10.6607C6.55357 10.6607 5.33929 9.48214 5.33929 7.98214C5.33929 6.51786 6.51786 5.33929 8.01786 5.33929C9.48214 5.33929 10.6607 6.51786 10.6607 7.98214C10.6607 9.48214 9.48214 10.6607 8.01786 10.6607ZM13.2321 3.73214C13.2321 3.19643 12.8036 2.76786 12.2679 2.76786C11.7321 2.76786 11.3036 3.19643 11.3036 3.73214C11.3036 4.26786 11.7321 4.69643 12.2679 4.69643C12.8036 4.69643 13.2321 4.26786 13.2321 3.73214ZM15.9464 4.69643C15.875 3.41071 15.5893 2.26786 14.6607 1.33929C13.7321 0.410714 12.5893 0.125 11.3036 0.0535714C9.98214 -0.0178571 6.01786 -0.0178571 4.69643 0.0535714C3.41071 0.125 2.30357 0.410714 1.33929 1.33929C0.410714 2.26786 0.125 3.41071 0.0535714 4.69643C-0.0178571 6.01786 -0.0178571 9.98214 0.0535714 11.3036C0.125 12.5893 0.410714 13.6964 1.33929 14.6607C2.30357 15.5893 3.41071 15.875 4.69643 15.9464C6.01786 16.0179 9.98214 16.0179 11.3036 15.9464C12.5893 15.875 13.7321 15.5893 14.6607 14.6607C15.5893 13.6964 15.875 12.5893 15.9464 11.3036C16.0179 9.98214 16.0179 6.01786 15.9464 4.69643ZM14.2321 12.6964C13.9821 13.4107 13.4107 13.9464 12.7321 14.2321C11.6607 14.6607 9.16071 14.5536 8.01786 14.5536C6.83929 14.5536 4.33929 14.6607 3.30357 14.2321C2.58929 13.9464 2.05357 13.4107 1.76786 12.6964C1.33929 11.6607 1.44643 9.16071 1.44643 7.98214C1.44643 6.83929 1.33929 4.33929 1.76786 3.26786C2.05357 2.58929 2.58929 2.05357 3.30357 1.76786C4.33929 1.33929 6.83929 1.44643 8.01786 1.44643C9.16071 1.44643 11.6607 1.33929 12.7321 1.76786C13.4107 2.01786 13.9464 2.58929 14.2321 3.26786C14.6607 4.33929 14.5536 6.83929 14.5536 7.98214C14.5536 9.16071 14.6607 11.6607 14.2321 12.6964Z" />
				);
			case 'youtube':
				return (
					<path d="M14.6929 4.58854C14.5393 3.96354 14.053 3.46875 13.4644 3.3125C12.3638 3 8.0128 3 8.0128 3C8.0128 3 3.6362 3 2.53565 3.3125C1.94698 3.46875 1.46069 3.96354 1.30713 4.58854C1 5.68229 1 8.02604 1 8.02604C1 8.02604 1 10.3437 1.30713 11.4635C1.46069 12.0885 1.94698 12.5573 2.53565 12.7135C3.6362 13 8.0128 13 8.0128 13C8.0128 13 12.3638 13 13.4644 12.7135C14.053 12.5573 14.5393 12.0885 14.6929 11.4635C15 10.3437 15 8.02604 15 8.02604C15 8.02604 15 5.68229 14.6929 4.58854ZM6.57952 10.1354V5.91667L10.2139 8.02604L6.57952 10.1354Z" />
				);
			case 'tiktok':
				return (
					<path d="M14.1647 3.75309C13.3641 3.57767 12.6398 3.15406 12.0958 2.54305C11.5518 1.93204 11.2161 1.16503 11.1368 0.352102V0H8.36581V10.9392C8.36638 11.4246 8.21364 11.8978 7.92924 12.2919C7.64485 12.686 7.2432 12.981 6.78121 13.135C6.31922 13.289 5.82029 13.2943 5.35511 13.1501C4.88993 13.0059 4.48208 12.7195 4.18933 12.3316C3.92705 11.9881 3.76645 11.5784 3.72568 11.1488C3.68492 10.7192 3.76561 10.2868 3.95864 9.90046C4.15167 9.51415 4.44934 9.18935 4.81798 8.9628C5.18662 8.73625 5.61153 8.61698 6.04465 8.61849C6.28419 8.61713 6.52253 8.65221 6.75144 8.72252V5.92171C6.48506 5.88884 6.21662 5.87547 5.94827 5.8817C4.95982 5.90802 4.00052 6.22095 3.18784 6.78218C2.37517 7.34341 1.74439 8.12857 1.37275 9.04153C1.00112 9.95448 0.904748 10.9556 1.09545 11.9223C1.28615 12.889 1.75565 13.7793 2.44645 14.4842C3.15443 15.2014 4.06041 15.6926 5.04928 15.8956C6.03814 16.0986 7.06525 16.0041 8.0001 15.6242C8.93494 15.2442 9.73533 14.596 10.2995 13.7618C10.8638 12.9276 11.1664 11.9451 11.1689 10.9392V5.33754C12.2865 6.13293 13.6266 6.55841 15 6.5539V3.83311C14.7302 3.83422 14.461 3.8074 14.1968 3.75309H14.1647Z" />
				);
			case 'spotify':
				return (
					<path d="M8.00667 1.34599C4.34333 1.34599 1.346 4.34333 1.346 8.00666C1.346 11.6693 4.34333 14.6667 8.00667 14.6667C11.6693 14.6667 14.6667 11.6693 14.6667 8.00666C14.6667 4.34333 11.7027 1.34599 8.00667 1.34599ZM11.07 10.97C10.9373 11.1693 10.704 11.2367 10.5033 11.104C8.93733 10.1373 6.97267 9.93733 4.64133 10.47C4.40933 10.538 4.20933 10.3713 4.14267 10.1707C4.07533 9.93733 4.242 9.73866 4.44267 9.67133C6.97267 9.10466 9.17133 9.33866 10.9027 10.4047C11.136 10.504 11.1693 10.77 11.07 10.97ZM11.87 9.13866C11.7027 9.37133 11.4033 9.47133 11.1693 9.30466C9.37133 8.20733 6.64133 7.87266 4.54333 8.53933C4.278 8.60666 3.97667 8.47266 3.91067 8.20733C3.84333 7.93933 3.97733 7.63933 4.24333 7.57266C6.674 6.84066 9.672 7.20733 11.736 8.47333C11.936 8.57266 12.036 8.90533 11.87 9.13866V9.13866ZM11.936 7.27266C9.80467 6.00799 6.24133 5.87466 4.20933 6.50866C4.0548 6.55319 3.88906 6.53647 3.74654 6.46198C3.60401 6.38749 3.49566 6.26095 3.444 6.10866C3.39868 5.95394 3.41493 5.7877 3.48936 5.64469C3.56378 5.50168 3.69062 5.39298 3.84333 5.34133C6.208 4.64199 10.1047 4.77466 12.5693 6.24199C12.8687 6.40799 12.9687 6.80799 12.802 7.10733C12.6353 7.34066 12.236 7.43933 11.936 7.27266Z"/>
				)
			case 'soundcloud':
				return (
					<path d="M1.98066 8.12533C1.95333 8.12533 1.92866 8.15067 1.92533 8.18L1.796 9.378L1.92533 10.5487C1.92866 10.5813 1.95333 10.6033 1.98066 10.6033C2.008 10.6033 2.03066 10.5813 2.03666 10.5487L2.17733 9.378L2.02733 8.18C2.02733 8.14933 2.00266 8.12533 1.978 8.12533H1.98066ZM1.478 8.586C1.444 8.586 1.42733 8.606 1.41933 8.63867L1.32733 9.378L1.41933 10.106C1.41933 10.1367 1.444 10.158 1.46933 10.158C1.49533 10.158 1.518 10.1327 1.52733 10.1L1.64466 9.36667L1.52733 8.62533C1.52733 8.59133 1.50266 8.57467 1.47733 8.57467L1.478 8.586ZM2.49466 7.89133C2.46 7.89133 2.428 7.91733 2.428 7.94933L2.31066 9.37533L2.436 10.7427C2.436 10.7753 2.46066 10.8093 2.502 10.8093C2.53666 10.8093 2.56133 10.7753 2.57 10.7427L2.71066 9.36667L2.57 7.94933C2.56133 7.91667 2.53533 7.88267 2.502 7.88267L2.49466 7.89133ZM3.02866 7.83267C2.98666 7.83267 2.95266 7.86667 2.94466 7.908L2.83733 9.37533L2.95533 10.7907C2.96333 10.8327 2.996 10.8667 3.03666 10.8667C3.07933 10.8667 3.112 10.8327 3.12 10.784L3.254 9.37533L3.12 7.91733C3.12018 7.90754 3.11839 7.8978 3.11474 7.8887C3.11109 7.87961 3.10566 7.87134 3.09876 7.86438C3.09186 7.85742 3.08364 7.85191 3.07458 7.84818C3.06552 7.84445 3.0558 7.84258 3.046 7.84267L3.02866 7.83267V7.83267ZM3.67 8.03333C3.66974 8.02201 3.66723 8.01085 3.66262 8.00051C3.65801 7.99017 3.65138 7.98084 3.64313 7.97309C3.63487 7.96533 3.62516 7.95929 3.61455 7.95533C3.60394 7.95137 3.59265 7.94956 3.58133 7.95C3.5583 7.94943 3.53594 7.95779 3.51892 7.97331C3.5019 7.98884 3.49154 8.01035 3.49 8.03333L3.36866 9.384L3.48133 10.8093C3.48124 10.8209 3.48346 10.8323 3.48786 10.843C3.49226 10.8537 3.49875 10.8634 3.50695 10.8715C3.51514 10.8797 3.52489 10.8861 3.5356 10.8904C3.54631 10.8947 3.55778 10.8968 3.56933 10.8967C3.61066 10.8967 3.65133 10.86 3.65133 10.8087L3.77733 9.38267L3.65133 8.02533L3.67 8.03333V8.03333ZM4.11933 7.08267C4.09326 7.08368 4.06854 7.09457 4.05022 7.11315C4.03189 7.13172 4.02132 7.15658 4.02066 7.18267L3.90333 9.38267L4.00733 10.8087C4.00733 10.86 4.05133 10.9 4.10733 10.9C4.15933 10.9 4.204 10.8507 4.20733 10.8L4.32333 9.37533L4.208 7.16667C4.20333 7.108 4.15866 7.06533 4.108 7.06533L4.11933 7.08267ZM4.64133 6.55733C4.61245 6.55853 4.58499 6.57023 4.56412 6.59024C4.54326 6.61025 4.53041 6.63719 4.528 6.666L4.428 9.37467L4.52 10.7913C4.52 10.858 4.57 10.9073 4.62866 10.9073C4.686 10.9073 4.736 10.858 4.74466 10.7913L4.85266 9.37467L4.74533 6.67333C4.73666 6.60667 4.68666 6.55667 4.62866 6.55667L4.64133 6.55733ZM5.17933 6.30867C5.11133 6.30867 5.062 6.35733 5.054 6.424L4.96133 9.35733L5.054 10.7587C5.062 10.8253 5.11133 10.884 5.17933 10.884C5.21219 10.883 5.24341 10.8694 5.2666 10.8461C5.28978 10.8228 5.30316 10.7915 5.304 10.7587L5.41266 9.35733L5.30333 6.424C5.30333 6.35733 5.24533 6.29867 5.178 6.29867L5.17933 6.30867ZM5.87 6.324C5.87027 6.3065 5.86702 6.28913 5.86045 6.27291C5.85388 6.2567 5.84412 6.24196 5.83174 6.22959C5.81937 6.21722 5.80464 6.20745 5.78842 6.20088C5.7722 6.19431 5.75483 6.19106 5.73733 6.19133C5.70223 6.192 5.66873 6.20616 5.64379 6.23086C5.61884 6.25556 5.60435 6.28891 5.60333 6.324L5.52 9.34933L5.60266 10.742C5.61266 10.816 5.67 10.8747 5.74533 10.8747C5.82066 10.8747 5.87933 10.816 5.87933 10.742L5.97 9.34933L5.87933 6.316L5.87 6.324V6.324ZM6.28666 6.25C6.21133 6.25 6.14466 6.31667 6.14466 6.39067L6.06133 9.35L6.14466 10.7253C6.14466 10.8087 6.21133 10.8673 6.28666 10.8673C6.32527 10.8661 6.36186 10.8498 6.38854 10.8218C6.41523 10.7939 6.42987 10.7566 6.42933 10.718L6.51266 9.342L6.41933 6.39C6.41933 6.30867 6.35266 6.24 6.26933 6.24L6.28666 6.25ZM6.828 6.33267C6.80722 6.33258 6.78664 6.33661 6.76743 6.34451C6.74822 6.35242 6.73077 6.36406 6.71608 6.37875C6.70139 6.39344 6.68975 6.41089 6.68185 6.4301C6.67394 6.44931 6.66991 6.46989 6.67 6.49067L6.61266 9.35067L6.688 10.726C6.688 10.8087 6.75466 10.88 6.84533 10.88C6.92866 10.88 6.99666 10.8133 7.00333 10.722L7.07066 9.36333L6.996 6.52C6.98933 6.42867 6.92066 6.36133 6.838 6.36133L6.828 6.33267ZM7.49666 5.83733C7.46857 5.82088 7.43655 5.81236 7.404 5.81267C7.37066 5.81267 7.33733 5.82133 7.31266 5.83733C7.28757 5.85182 7.26669 5.8726 7.25207 5.89761C7.23746 5.92263 7.22962 5.95103 7.22933 5.98V6.01333L7.172 9.376L7.236 10.738V10.7427C7.24 10.776 7.252 10.8173 7.276 10.8427C7.30933 10.8767 7.356 10.9 7.40666 10.9C7.45011 10.8977 7.49138 10.8802 7.52333 10.8507C7.53968 10.8342 7.55258 10.8146 7.56128 10.7931C7.56998 10.7716 7.5743 10.7485 7.574 10.7253L7.58266 10.5913L7.64733 9.366L7.572 5.98267C7.57162 5.95615 7.56466 5.93015 7.55175 5.90699C7.53883 5.88383 7.52036 5.86425 7.498 5.85L7.49666 5.83733V5.83733ZM8.05466 5.53267C8.04437 5.52105 8.0316 5.5119 8.01729 5.5059C8.00297 5.4999 7.9875 5.4972 7.972 5.498C7.93057 5.4965 7.88981 5.50868 7.856 5.53267C7.83576 5.54876 7.81929 5.5691 7.80777 5.59226C7.79625 5.61541 7.78996 5.64081 7.78933 5.66667V5.682L7.71333 9.35733L7.75533 10.0333L7.79 10.692C7.79106 10.7404 7.81132 10.7865 7.84633 10.82C7.88133 10.8535 7.92822 10.8717 7.97666 10.8707C8.02511 10.8696 8.07115 10.8493 8.10466 10.8143C8.13816 10.7793 8.15639 10.7324 8.15533 10.684L8.23866 9.342L8.15533 5.65133C8.1546 5.6199 8.14575 5.5892 8.12962 5.56221C8.1135 5.53522 8.09066 5.51287 8.06333 5.49733L8.05466 5.53267ZM13.0313 7.59733C12.8073 7.59733 12.5893 7.64533 12.3987 7.726C12.3582 7.27903 12.2143 6.8476 11.9784 6.46582C11.7424 6.08404 11.4209 5.76239 11.0392 5.52628C10.6576 5.29018 10.2262 5.1461 9.77925 5.10544C9.3323 5.06477 8.88201 5.12865 8.464 5.292C8.33866 5.342 8.31266 5.39267 8.30533 5.49267V10.7007C8.30817 10.7493 8.32813 10.7954 8.36168 10.8308C8.39523 10.8662 8.44021 10.8886 8.48866 10.894H13.04C13.2544 10.8959 13.467 10.8553 13.6655 10.7744C13.864 10.6935 14.0445 10.574 14.1964 10.4228C14.3484 10.2716 14.4688 10.0917 14.5507 9.89356C14.6325 9.69544 14.6742 9.48303 14.6733 9.26867C14.6744 8.83436 14.5029 8.4174 14.1966 8.10949C13.8903 7.80157 13.4743 7.6279 13.04 7.62667" />
				)
			default:
				return null;
		}
	}

	return (
		<IconWrapper
			size={size}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			color={color}
			css={{
				'> *': {
					fill: `${color}`,
				},
			}}
		>
			{iconRender(icon)}
		</IconWrapper>
	);
}
