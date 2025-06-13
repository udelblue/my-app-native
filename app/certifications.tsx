import * as React from 'react';
import { View } from 'react-native';
import Animated, { FadeInUp, FadeOutDown, LayoutAnimationConfig } from 'react-native-reanimated';
import { Info } from '~/lib/icons/Info';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Button } from '~/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { Progress } from '~/components/ui/progress';
import { Text } from '~/components/ui/text';
import { Tooltip, TooltipContent, TooltipTrigger } from '~/components/ui/tooltip';
import { Separator } from '~/components/ui/separator';

const GITHUB_AVATAR_URI =
  'https://avatars.githubusercontent.com/u/827775?s=400&u=5415ac9191d2e3fbeb2c432132e27afded009464&v=4';


export default function Screen() {
  const [progress, setProgress] = React.useState(78);

  function updateProgressValue() {
    setProgress(Math.floor(Math.random() * 100));
  }
  return (
    <View className='flex-1 justify-center items-center gap-5 p-6 bg-secondary/30'>
      <Card className='w-full max-w-sm p-6 rounded-2xl'>
     <CardHeader className='items-center'>
             <Avatar alt="Christopher Sommers Avatar" className='w-24 h-24'>
               <AvatarImage source={{ uri: GITHUB_AVATAR_URI }} />
               <AvatarFallback>
                 <Text>CS</Text>
               </AvatarFallback>
             </Avatar>
             <View className='p-3' />
             <CardTitle className='pb-2 text-center'>Chris Sommers</CardTitle>
             <View className='flex-row'>
               <CardDescription className='text-base font-semibold'>Solutions Architect</CardDescription>
               <Tooltip delayDuration={150}>
                 <TooltipTrigger className='px-2 pb-0.5 active:opacity-50'>
                   <Info size={14} strokeWidth={2.5} className='w-4 h-4 text-foreground/70' />
                 </TooltipTrigger>
                 <TooltipContent className='py-2 px-4 shadow'>
                   <Text className='native:text-lg'>Freelance</Text>
                 </TooltipContent>
               </Tooltip>
             </View>
           </CardHeader>
        <CardContent>
          <View className='flex-row items-center overflow-hidden'>
                         <Text className='text-lg text-center font-bold'>Licenses & certifications</Text>
                   </View>
                  
         <Separator className='my-2' />

        <Text className='text-sm font-medium'> Microsoft Azure </Text>

         <Text className='text-sm text-foreground/70'> Microsoft Azure Fundamentals </Text>
         <Text className='text-sm text-foreground/70'> Microsoft Azure AI Fundamentals </Text> 
         <Text className='text-sm text-foreground/70'> Microsoft Certified: Azure Administrator Associate </Text>
         
                 <Text className='text-sm font-medium'> AWS </Text>

         <Text className='text-sm text-foreground/70'> AWS Cloud Practitioner </Text>
         <Text className='text-sm text-foreground/70'> AWS Certified AI Practitioner </Text>
         <Text className='text-sm text-foreground/70'> AWS Certified Developer - Associate </Text>
         <Text className='text-sm text-foreground/70'> AWS Certified Security - Specialty </Text>
         <Text className='text-sm text-foreground/70'> AWS Certified SysOps Administrator - Associate </Text>
         <Text className='text-sm text-foreground/70'> AWS Certified Solutions Architect - Associate </Text>
         <Text className='text-sm text-foreground/70'> AWS Certified Solutions Architect - Professional </Text>
         
                  <Text className='text-sm font-medium'> GCP </Text>

         <Text className='text-sm text-foreground/70'> GCP - Associate Cloud Engineer </Text>
         <Text className='text-sm text-foreground/70'> GCP - Cloud Digital Leader </Text>
         
           <Text className='text-sm font-medium'> Oracle </Text>

         <Text className='text-sm text-foreground/70'> Oracle Cloud Infrastructure 2024 Foundations Associate </Text>
         <Text className='text-sm text-foreground/70'> Oracle Cloud Infrastructure 2024 AI Foundations Associate </Text>
         <Text className='text-sm text-foreground/70'> Oracle Cloud Infrastructure 2024 Data Foundations Associate </Text>
         
         
         
        </CardContent>

        <CardFooter className='flex-col gap-3 pb-0'>
          

          <View />
        
        </CardFooter>

      </Card>
    </View>
  );
}
