"use client"
import { Divider, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import sabaagh_alsaalimia from '@/app/Images/links-images/sabaagh_alsaalimia.jpg';
import sabaagh_sabah_alsaalim from '@/app/Images/links-images/sabaagh_sabah_alsaalim.webp';
import sabaagh_hawalli from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_jaber_alahmad from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_khaitan from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_alfarwaniyah from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_aljabriya from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_alshaab from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_bayan from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_janoub_alsura from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_mubarak from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_mishref from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_alzahraa from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_alsiddiq from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_hateen from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_salwa from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_alshuhadaa from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_al_salam from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_al_masila from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_almasayel from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_abu_alhasania from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_subhan from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_abu_ftaira from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_al_fintas from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_mubarak_al_kabeer from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_alaqeela from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_alfntas from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_alraqa from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_abu_halifa from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_alsabahiya from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_almanqaf from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_almahboula from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_al_ahmadi from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_al_khiran from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_alfhahil from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_alwafra from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_jaber_alali from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_fahad_alahmad from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_aldaiya from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_aldasma from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_aldohah from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_alkhaldiya from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_alrawdah from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_alrai from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_alshuwaykh from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_asharq from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_alshamiya from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_alsurra from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_alqadesiya from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_alqurawan from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_alfaihaa from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_aladiliya from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_alsulaybikhat from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_kaifan from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_qurtoba from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_ghranata from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_abdullah_al_salim from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_dasman from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_bneid_alqar from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_alnahda from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_alnuzha from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_almansouriya from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_mantiqa_al_ashira from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_alandalus from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_alqrean from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_alkswor from "@/app/Images/links-images/aisbgh_alkuayt.webp"
import sabaagh_aladaan from "@/app/Images/links-images/aisbgh_alkuayt.webp"

import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { zones } from './Links';

const generateLinkData = (title: string) => (
    <Stack alignItems="center" spacing={2}>
        <Stack spacing={2} alignItems="center">
            <Typography variant="h1" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                {title} - صباغ الكويت - 50303335
            </Typography>
            <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                يعتبر {title} في منطقة الكويت هو الصباغ الاول في الوطن العربي لجميع اصباغ دولة الكويت اتصل الان علي صباغ السالمية واحصل علي خصم 30%علي جميع انواع الاصباغ
            </Typography>
            <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
        </Stack>
        <Stack spacing={2} alignItems="center">
            <Typography variant="h2" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                صباغ - صباغ الكويت
            </Typography>
            <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                يعتبر صباغ من اهم الكلمات المستخدمة في مجال اصباغ الكويت وتعني دهانات المنازل والشقق والقسائم وعمل ديكورات في البيوت وتصميم رسومات في شقق الاطفال داخل دولة الكويت تعتبر الصباغة جزءًا مهمًا لتجديد المنازل والمباني. في الكويت، هناك شركات متخصصة تقدم خدمات صباغة متنوعة. هذه الشركات تستخدم تقنيات حديثة ومواد عالية الجودة لتحقيق أفضل النتائج. تشمل خدمات الصباغة في الكويت صباغة داخلية وخارجية، ورق جدران، وحل مشاكل الجدران. الصباغ المحترف في الكويت يركز على السلامة ويعد المكان جيدًا قبل البدء بالعمل. 80% من الأفراد يشعرون بالسعادة بعد تغيير لون منازلهم. تحسين مظهر المنزل يمكن أن يزيد من قيمته. لذلك، اختيار شركة صباغة محترفة مهم للحصول على أفضل النتائج بأسعار معقولة.
            </Typography>
            <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
        </Stack>

    </Stack>

);

// Data for different IDs
const linksData: { [key: string]: React.ReactNode } = {
   
};

zones.forEach(location => {
    if (location.href) {
        const _id = location.href.replace(/-/g, '_');
        linksData[_id] = generateLinkData(location.title);
    }
});

// Main component
const LinksContent = ({ id }: { id: string }) => {
    const _id = id.replace(/-/g, '_');

    const content = linksData[_id]; // Access the content based on ID
    const image = ImagesData[_id]

    return (
        <Stack spacing={2} alignItems="center">
            {image ?? image}
            {!!content ? content : <Typography>Content not available.</Typography>}
        </Stack>
    );
};

export default LinksContent;

const ImageStyle = ({ src, alt }: { src: string | StaticImport, alt: string }) => {
    return <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Image
            loading='lazy'
            alt={alt}
            src={src}
            style={{
                width: '100%',
                height: 'auto',
            }}
        />
    </div>
}

const de = {
    sabaagh_alsaalimia: <ImageStyle src={sabaagh_alsaalimia} alt={"صباغ السالمية"} />,
    sabaagh_sabah_alsaalim: <ImageStyle src={sabaagh_sabah_alsaalim} alt={"صباغ صباح السالم"} />,
    sabaagh_hawalli: <ImageStyle src={sabaagh_hawalli} alt={"صباغ حولي"} />,
    sabaagh_jaber_alahmad: <ImageStyle src={sabaagh_jaber_alahmad} alt={"صباغ جابر الاحمد"} />,
    sabaagh_khaitan: <ImageStyle src={sabaagh_khaitan} alt={"صباغ خيطان"} />,
    sabaagh_alfarwaniyah: <ImageStyle src={sabaagh_alfarwaniyah} alt={"صباغ الفروانية"} />,
    sabaagh_aljabriya: <ImageStyle src={sabaagh_aljabriya} alt={"صباغ الجابرية"} />,
    sabaagh_alshaab: <ImageStyle src={sabaagh_alshaab} alt={"صباغ الشعب"} />,
    sabaagh_bayan: <ImageStyle src={sabaagh_bayan} alt={"صباغ بيان"} />,
    sabaagh_janoub_alsura: <ImageStyle src={sabaagh_janoub_alsura} alt={"صباغ جنوب السرة"} />,
    sabaagh_mubarak: <ImageStyle src={sabaagh_mubarak} alt={"صباغ مبارك"} />,
    sabaagh_mishref: <ImageStyle src={sabaagh_mishref} alt={"صباغ مشرف"} />,
    sabaagh_alzahraa: <ImageStyle src={sabaagh_alzahraa} alt={"صباغ الزهراء"} />,
    sabaagh_alsiddiq: <ImageStyle src={sabaagh_alsiddiq} alt={"صباغ الصديق"} />,
    sabaagh_hateen: <ImageStyle src={sabaagh_hateen} alt={"صباغ حطين"} />,
    sabaagh_salwa: <ImageStyle src={sabaagh_salwa} alt={"صباغ سلوي"} />,
    sabaagh_alshuhadaa: <ImageStyle src={sabaagh_alshuhadaa} alt={"صباغ الشهداء"} />,
    sabaagh_al_salam: <ImageStyle src={sabaagh_al_salam} alt={"صباغ السلام"} />,
    sabaagh_al_masila: <ImageStyle src={sabaagh_al_masila} alt={"صباغ المسلية"} />,
    sabaagh_almasayel: <ImageStyle src={sabaagh_almasayel} alt={"صباغ المسايل"} />,
    sabaagh_abu_alhasania: <ImageStyle src={sabaagh_abu_alhasania} alt={"صباغ ابو الحصاني"} />,
    sabaagh_subhan: <ImageStyle src={sabaagh_subhan} alt={"صباغ صبحان"} />,
    sabaagh_abu_ftaira: <ImageStyle src={sabaagh_abu_ftaira} alt={"صباغ ابو فطيرة"} />,
    sabaagh_al_fintas: <ImageStyle src={sabaagh_al_fintas} alt={"صباغ الفينطيس"} />,
    sabaagh_mubarak_al_kabeer: <ImageStyle src={sabaagh_mubarak_al_kabeer} alt={"صباغ مبارك الكبير"} />,
    sabaagh_alaqeela: <ImageStyle src={sabaagh_alaqeela} alt={"صباغ العقيلة"} />,
    sabaagh_alfntas: <ImageStyle src={sabaagh_alfntas} alt={"صباغ الفنطاس"} />,
    sabaagh_alraqa: <ImageStyle src={sabaagh_alraqa} alt={"صباغ الرقة"} />,
    sabaagh_abu_halifa: <ImageStyle src={sabaagh_abu_halifa} alt={"صباغ ابو حليفة"} />,
    sabaagh_alsabahiya: <ImageStyle src={sabaagh_alsabahiya} alt={"صباغ الصباحية"} />,
    sabaagh_almanqaf: <ImageStyle src={sabaagh_almanqaf} alt={"صباغ المنقف"} />,
    sabaagh_almahboula: <ImageStyle src={sabaagh_almahboula} alt={"صباغ المهبولة"} />,
    sabaagh_al_ahmadi: <ImageStyle src={sabaagh_al_ahmadi} alt={"صباغ الاحمدي"} />,
    sabaagh_al_khiran: <ImageStyle src={sabaagh_al_khiran} alt={"صباغ الخيران"} />,
    sabaagh_alfhahil: <ImageStyle src={sabaagh_alfhahil} alt={"صباغ الفحيحيل"} />,
    sabaagh_alwafra: <ImageStyle src={sabaagh_alwafra} alt={"صباغ الوفرة"} />,
    sabaagh_jaber_alali: <ImageStyle src={sabaagh_jaber_alali} alt={"صباغ جابر العلي"} />,
    sabaagh_fahad_alahmad: <ImageStyle src={sabaagh_fahad_alahmad} alt={"صباغ فهد الاحمد"} />,
    sabaagh_aldaiya: <ImageStyle src={sabaagh_aldaiya} alt={"صباغ الدعية"} />,
    sabaagh_aldasma: <ImageStyle src={sabaagh_aldasma} alt={"صباغ الدسمة"} />,
    sabaagh_aldohah: <ImageStyle src={sabaagh_aldohah} alt={"صباغ الدوحة"} />,
    sabaagh_alkhaldiya: <ImageStyle src={sabaagh_alkhaldiya} alt={"صباغ الخالدية"} />,
    sabaagh_alrawdah: <ImageStyle src={sabaagh_alrawdah} alt={"صباغ الروضة"} />,
    sabaagh_alrai: <ImageStyle src={sabaagh_alrai} alt={"صباغ الري"} />,
    sabaagh_alshuwaykh: <ImageStyle src={sabaagh_alshuwaykh} alt={"صباغ الشويخ"} />,
    sabaagh_asharq: <ImageStyle src={sabaagh_asharq} alt={"صباغ الشرق"} />,
    sabaagh_alshamiya: <ImageStyle src={sabaagh_alshamiya} alt={"صباغ الشامية"} />,
    sabaagh_alsurra: <ImageStyle src={sabaagh_alsurra} alt={"صباغ السرة"} />,
    sabaagh_alqadesiya: <ImageStyle src={sabaagh_alqadesiya} alt={"صباغ القادسية"} />,
    sabaagh_alqurawan: <ImageStyle src={sabaagh_alqurawan} alt={"صباغ القروان"} />,
    sabaagh_alfaihaa: <ImageStyle src={sabaagh_alfaihaa} alt={"صباغ الفيحاء"} />,
    sabaagh_aladiliya: <ImageStyle src={sabaagh_aladiliya} alt={"صباغ العديلية"} />,
    sabaagh_alsulaybikhat: <ImageStyle src={sabaagh_alsulaybikhat} alt={"صباغ الصليبخات"} />,
    sabaagh_kaifan: <ImageStyle src={sabaagh_kaifan} alt={"صباغ كيفان"} />,
    sabaagh_qurtoba: <ImageStyle src={sabaagh_qurtoba} alt={"صباغ قرطبة"} />,
    sabaagh_ghranata: <ImageStyle src={sabaagh_ghranata} alt={"صباغ غرناطة"} />,
    sabaagh_abdullah_al_salim: <ImageStyle src={sabaagh_abdullah_al_salim} alt={"صباغ ضاحية عبدالله السالم"} />,
    sabaagh_dasman: <ImageStyle src={sabaagh_dasman} alt={"صباغ دسمان"} />,
    sabaagh_bneid_alqar: <ImageStyle src={sabaagh_bneid_alqar} alt={"صباغ بنيد القار"} />,
    sabaagh_alnahda: <ImageStyle src={sabaagh_alnahda} alt={"صباغ النهضة"} />,
    sabaagh_alnuzha: <ImageStyle src={sabaagh_alnuzha} alt={"صباغ النزهة"} />,
    sabaagh_almansouriya: <ImageStyle src={sabaagh_almansouriya} alt={"صباغ المنصورية"} />,
    sabaagh_mantiqa_al_ashira: <ImageStyle src={sabaagh_mantiqa_al_ashira} alt={"صباغ المنطقة العاشرة"} />,
    sabaagh_alandalus: <ImageStyle src={sabaagh_alandalus} alt={"صباغ الاندلس"} />,
    sabaagh_alqrean: <ImageStyle src={sabaagh_alqrean} alt={"صباغ القرين"} />,
    sabaagh_alkswor: <ImageStyle src={sabaagh_alkswor} alt={"صباغ القصور"} />,
    sabaagh_aladaan: <ImageStyle src={sabaagh_aladaan} alt={"صباغ العدان"} />
}

const ImagesData: { [key: string]: React.ReactNode } = {
    ...de
}




