import type { NextPage } from 'next';
import { Avatar } from '../components/avatar'
import { Flex } from '@/components/layout';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipArrow, TooltipProvider } from '../components/tooltip'
import { Badge } from '@/components/badge'

const Home: NextPage = () => {
	return (
		<div>
			<Flex direction='row'>
				<TooltipProvider delayDuration={500} skipDelayDuration={500}>
					<Tooltip>
						<TooltipTrigger asChild>
							<Badge>Hover over me</Badge>
						</TooltipTrigger>
						<TooltipContent side='right'>
						Lorem ipsum dolor sit amet
							<TooltipArrow />
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</Flex>
		</div>
	);
};

export default Home
