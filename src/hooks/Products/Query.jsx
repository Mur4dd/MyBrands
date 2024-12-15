import { useSelector } from 'react-redux';
import { useState } from 'react';

export function useSideBar () {

        const [gender, setGender] = useState({ value: [], state: false });
        const [price, setPrice] = useState({ min: 0, max: 0, state: false });
        const [category, setCategory] = useState({ value: "", state: false });
        const [subCategory, setsubCategory] = useState({ value: [], state: false });
        const [color, setColor] = useState({value: [], state: false})
        const [brand, setBrand] = useState({ value: [], state: false });
        const [size, setSize] = useState({value: [], state: false });
        const brands = useSelector(state => state.home.Brands);
    
    
        const HandleGender = (event, gen) => {
            const index = gender.value.findIndex(g => g == gen);
            if (index == -1) {
                setGender({ ...gender, value: [...gender.value, gen]})
            }else {
                const genders = gender.value.filter(g => g != gen);
                setGender({value: genders, state: gender.state})
            }
        }
    
        const HandleBrand = (event, brd) => {
            const index = brand.value.findIndex(b => b == brd);
            if (index == -1) {
                setBrand({ ...brand, value: [...brand.value, brd]})
            }else {
                const brands = brand.value.filter(b => b != brd);
                setBrand({value: brands, state: brand.state})
            }
        }
    
        const HandleColor = (event, clr) => {
            const index = color.value.findIndex(c => c == clr);
            if (index == -1) {
                setColor({ ...color, value: [...color.value, clr]})
            }else {
                const colors = color.value.filter(c => c != clr);
                setColor({value: colors, state: color.state})
            }
        }
    
        const HandleSize = (event, sz) => {
            const index = size.value.findIndex(s => s == sz);
            if (index == -1) {
                setSize({ ...size, value: [...size.value, sz]})
            }else {
                const sizes = size.value.filter(s => s != sz);
                setSize({value: sizes, state: size.state})
            }
        }
    
        const HandlesubCategory = (event, ctg) => {
            const index = subCategory.value.findIndex(c => c == ctg);
            if (index == -1) {
                setsubCategory({ ...subCategory, value: [...subCategory.value, ctg]})
            }else {
                const subCategorys = subCategory.value.filter(c => c != ctg);
                setsubCategory({value: subCategorys, state: subCategory.state})
            }
        }
    
        return {gender, price, category, subCategory, color, brand, size, brands, HandleBrand, HandleColor, HandleGender, HandleSize, HandlesubCategory, setBrand, setCategory, setColor, setGender, setPrice, setSize, setsubCategory};
}

