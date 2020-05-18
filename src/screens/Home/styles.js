import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: #f4f4f4;
`;
export const Header = styled.SafeAreaView`
    width:100%;
    height:120px;
`;


export const Title = styled.Text`
    font-weight: bold;
    font-size:18px;
    margin-left: 20px;
    margin-top: 20px;
    color:#151515;
`

export const User = styled.Text`
    font-size:20px;
    margin-left: 20px;
    color:#151515;
`

export const Scroll = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
        paddingLeft: 16
    }
})`
    margin-top: 10px;
`;

export const SmallItem = styled.TouchableOpacity`
    width: 90px;
    height:90px;
    background-color: #fff;
    margin-right: 16px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.8);
`;

export const SmallDescription = styled.Text`
    font-size: 12px;
    color: #2b2b2b;
`;


export const BigItem = styled.TouchableOpacity`
    width: 120px;
    height:180px;
    background-color: #fff;
    margin-right: 16px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
`;


