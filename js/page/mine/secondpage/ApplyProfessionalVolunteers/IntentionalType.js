/**
 * Created by nbcei on 2017/4/27.
 */
/**
 * Created by nbcei on 2017/4/27.
 * 意向种类
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';


import MyViewUtils from '../../utils/MyViewUtils'
import BaseComponent from '../../../../page/BaseComponent';
export default class IntentionalType extends BaseComponent {
    constructor() {
        super();

    }

    render() {

        return (
            <View style={styles.container}>
                {MyViewUtils.getToolBar(()=>{this.back()},'意向种类','提交',()=>{this.submit()})}
            </View>
        );
    }
    /****
     * 返回
     */
    back(){
        this.props.navigator.pop();
    }

    /***
     * 提交
     */
    submit(){

    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,

        backgroundColor: '#F5FCFF',
    },
    map: {
        height: 700,
        borderWidth: 1,
        borderColor: '#000000',
    }
});

