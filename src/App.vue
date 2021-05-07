<template>
    <div id="app">
        <audio id="Music" muted src="../src/assets/mp3/door_chimes.mp3" controls></audio>
        <div class="time-div">
            <i class="el-icon-time icon-div">
                    最後更新時間：
            </i>
            <div class="newTime-div">
                {{getNowTime}}
            </div>
        </div>
        <div class='table'>
            <el-table :data="showData" style="width: 100%" >
                <el-table-column prop="serial" label="序號" sortable min-width="8" align="center" key="serial"></el-table-column>
                <el-table-column
                        prop="time"
                        label="受理時間"
                        sortable
                        min-width="12"
                        align="center"
                        key="time"
                ></el-table-column>
                <el-table-column
                        prop="caseClass"
                        label="案類"
                        sortable
                        min-width="13"
                        align="center"
                >
                    <template slot-scope="scope">
                        <div v-if ="scope.row.caseClass === '緊急救護' ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" style=" vertical-align: middle;">
                                <g transform="translate(0.5 0.5)">
                                    <circle class="emergency_a" cx="20" cy="20" r="20"/>
                                    <g transform="translate(-390.087 -130)">
                                        <path class="emergency_b" d="M420.571,163.953c0,.9-1.108,1.628-3.293,2.151a31.389,31.389,0,0,1-6.589.712c-.187,0-.388.005-.6.005a32.359,32.359,0,0,1-7.191-.716c-2.185-.524-3.293-1.248-3.293-2.152,0-.844.969-1.533,2.88-2.047a29.052,29.052,0,0,1,6.349-.8h2.509a29.088,29.088,0,0,1,6.351.8c1.91.514,2.879,1.2,2.879,2.047Z"/>
                                        <path class="emergency_c" d="M421.8,146.533a11.714,11.714,0,0,1-7.736,11.02l-3.566,6.478a.467.467,0,0,1-.82,0l-.527-.956-3.039-5.522a11.714,11.714,0,0,1,3.039-22.695q.464-.038.937-.037A11.725,11.725,0,0,1,421.8,146.533Z"/>
                                        <path class="emergency_d" d="M421.8,146.533a11.714,11.714,0,0,1-7.736,11.02l-3.566,6.478a.467.467,0,0,1-.82,0l-.527-.956,3.04-5.522a11.714,11.714,0,0,0-3.04-22.695q.464-.038.937-.037A11.725,11.725,0,0,1,421.8,146.533Z"/>
                                        <path class="emergency_e" d="M417.841,146.627a7.762,7.762,0,1,1-7.757-7.757A7.765,7.765,0,0,1,417.841,146.627Z"/>
                                        <path class="emergency_b" d="M417.841,146.627a7.762,7.762,0,0,1-8.693,7.7,7.758,7.758,0,0,0,0-15.4,7.762,7.762,0,0,1,8.693,7.7Z"/>
                                        <path class="emergency_c" d="M413.624,145.053h-1.966V143.1a.4.4,0,0,0-.4-.4H408.9a.4.4,0,0,0-.4.4v1.95H406.55a.4.4,0,0,0-.4.4V147.8a.4.4,0,0,0,.4.4H408.5v1.951a.4.4,0,0,0,.4.4h2.356a.4.4,0,0,0,.4-.4V148.2h1.966a.4.4,0,0,0,.4-.4v-2.346A.4.4,0,0,0,413.624,145.053Z"/>
                                    </g>
                                </g>
                            </svg>
                            <span class="caseClassList-div">
                                {{scope.row.caseClass}}
                            </span>
                        </div>
                        <div v-else-if =" scope.row.caseClass == '火災' ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" style=" vertical-align: middle;">
                                <g transform="translate(0.5 0.5)">
                                    <circle class="fire_a" cx="20" cy="20" r="20"/>
                                    <g transform="translate(-389.148 -690)">
                                        <path class="fire_b" d="M403.882,721.092c-.814-5.123,3.722-9.4,3.722-9.4s-.368,5.957,1.943,7.014V697.968c-3.22,1.045-8.731,3.649-10.351,9.507a12.688,12.688,0,0,0,.668,8.358,2.233,2.233,0,0,1-1.615-.334,7.729,7.729,0,0,1-1.76-1.8s.368,11.839,12.816,12.319A6.013,6.013,0,0,1,403.882,721.092Z"/>
                                        <path class="fire_c" d="M421.75,710.851a12.275,12.275,0,0,1-1.555,2.532,5.619,5.619,0,0,1-3.111,1.688s3.423-1.688,3.423-5.064-3.111-8.439-3.111-8.439-.023,8.578-4.666,7.6c-5.387-1.14-.789-11.815-.789-11.815a18.1,18.1,0,0,0-2.394.62v20.741a1.719,1.719,0,0,0,.575.159c2.95.26,2.976-5.027,2.976-5.027a7.846,7.846,0,0,1,2.212,5.53c.014,3.515-2.172,6.608-5.408,6.665.062,0,.12.006.182.006C423.306,726.042,421.75,710.851,421.75,710.851Z"/>
                                        <path class="fire_d" d="M409.547,726.03c.088,0,.177.012.265.012.031,0,.06-.005.09-.006-.121,0-.236-.007-.355-.01Z"/>
                                        <path class="fire_d" d="M409.3,726.019c.081.007.161.007.242.011v0Z"/>
                                        <path class="fire_e" d="M409.547,718.709c-2.311-1.057-1.943-7.014-1.943-7.014s-4.536,4.274-3.722,9.4a6.013,6.013,0,0,0,5.423,4.927l.242.007Z"/>
                                        <path class="fire_d" d="M415.31,719.371a7.846,7.846,0,0,0-2.212-5.53s-.026,5.287-2.976,5.027a1.719,1.719,0,0,1-.575-.159v7.317c.119,0,.234.009.355.01C413.138,725.979,415.324,722.886,415.31,719.371Z"/>
                                    </g>
                                </g>
                            </svg>
                            <span class="caseClassList-div" >
                                {{scope.row.caseClass}}
                            </span>
                        </div>
                        <div v-else-if =" scope.row.caseClass == '公務' ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" style=" vertical-align: middle;">
                            <g transform="translate(0.5 0.5)">
                                <circle class="pack_a" cx="20" cy="20" r="20"/>
                                <g transform="translate(-389.148 -830)">
                                    <path class="pack_b" d="M422.148,859.953v.762A2.282,2.282,0,0,1,419.863,863h-21.43a2.282,2.282,0,0,1-2.285-2.285v-.762l3.336-1.523h20.364Z"/>
                                    <path class="pack_c" d="M422.148,859.953v.762A2.282,2.282,0,0,1,419.863,863H409.148v-4.57h10.7Z"/>
                                    <path class="pack_d" d="M422.148,844.008v15.945h-26V844.008l1.569.426a6.732,6.732,0,0,0,6.708,6.277h9.446a6.739,6.739,0,0,0,6.708-6.246Z"/>
                                    <path class="pack_d" d="M416,840.809v1.523a.761.761,0,1,1-1.523,0v-1.523a2.283,2.283,0,0,0-2.285-2.286H406.1a2.282,2.282,0,0,0-2.285,2.286v1.523a.762.762,0,1,1-1.524,0v-1.523A3.81,3.81,0,0,1,406.1,837H412.2A3.81,3.81,0,0,1,416,840.809Z"/>
                                    <path class="pack_b" d="M412.2,838.523h-3.047V837H412.2A3.81,3.81,0,0,1,416,840.809v1.523a.761.761,0,1,1-1.523,0v-1.523A2.283,2.283,0,0,0,412.2,838.523Z"/>
                                    <path class="pack_b" d="M422.148,844.008v15.945h-13v-9.242h4.722a6.739,6.739,0,0,0,6.709-6.246Z"/>
                                    <path class="pack_e" d="M419.863,841.57h-21.43a2.282,2.282,0,0,0-2.285,2.286v.152a8.275,8.275,0,0,0,8.277,8.227h9.446a8.275,8.275,0,0,0,8.277-8.227v-.152A2.283,2.283,0,0,0,419.863,841.57Z"/>
                                    <path class="pack_f" d="M422.148,843.856v.152a8.275,8.275,0,0,1-8.278,8.227h-4.722V841.57h10.715A2.283,2.283,0,0,1,422.148,843.856Z"/>
                                    <path class="pack_g" d="M410.671,849.188h-3.047a.754.754,0,0,0-.761.761V853a.754.754,0,0,0,.761.762h3.047a.754.754,0,0,0,.762-.762v-3.047A.754.754,0,0,0,410.671,849.188Z"/>
                                    <path class="pack_h" d="M410.671,853.758h-1.523v-4.57h1.523a.754.754,0,0,1,.762.761V853A.754.754,0,0,1,410.671,853.758Z"/>
                            </g>
                            </g>
                            </svg>
                            <span class="caseClassList-div">
                                {{scope.row.caseClass}}
                            </span>
                        </div>
                        <div v-else-if =" scope.row.caseClass == '其他' ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" style=" vertical-align: middle;">
                                <g transform="translate(0.5 0.5)">
                                    <circle class="work_a" cx="20" cy="20" r="20"/>
                                    <g transform="translate(-389.148 -950)">
                                        <path class="work_b" d="M405.274,981.984h-3.083a5.077,5.077,0,0,1-5.078-5.078V963.094a5.077,5.077,0,0,1,5.078-5.078h3.083a5.069,5.069,0,0,0-5.064,5.076v13.816A5.069,5.069,0,0,0,405.274,981.984Zm7.327-5.839a5.841,5.841,0,0,1,4.037-5.556,5.84,5.84,0,1,0,0,11.111,5.84,5.84,0,0,1-4.037-5.555Z"/>
                                        <path class="work_c" d="M407.167,983h-4.925a6.1,6.1,0,0,1-6.094-6.094V963.094A6.1,6.1,0,0,1,402.242,957h9.343a6.1,6.1,0,0,1,6.094,6.094v3.3a1.015,1.015,0,0,1-2.031,0v-3.3a4.068,4.068,0,0,0-4.063-4.063h-9.343a4.068,4.068,0,0,0-4.063,4.063v13.812a4.068,4.068,0,0,0,4.063,4.063h4.925a1.016,1.016,0,1,1,0,2.031Zm5.231-21.023a1.016,1.016,0,1,0-2.031,0,1.525,1.525,0,0,1-1.524,1.523h-3.859a1.525,1.525,0,0,1-1.524-1.523,1.016,1.016,0,1,0-2.031,0,3.558,3.558,0,0,0,3.555,3.554h3.859A3.558,3.558,0,0,0,412.4,961.977Zm9.75,14.168A6.855,6.855,0,1,0,415.292,983,6.864,6.864,0,0,0,422.148,976.145Zm-2.031,0a4.825,4.825,0,1,1-4.825-4.825A4.83,4.83,0,0,1,420.117,976.145Z"/>
                                        <path class="work_d" d="M412.824,976.007l1.932,2.115,3.005-3.955"/>
                                    </g>
                                </g>
                            </svg>
                            <span class="caseClassList-div">
                                {{scope.row.caseClass}}
                            </span>
                        </div>
                        <div v-else>{{scope.row.caseClass}}</div>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="case"
                    label="案別"
                    sortable
                    min-width="8"
                    align="center"
                    key="case"
                ></el-table-column>
                <el-table-column
                    prop="location"
                    label="發生地點"
                    min-width="21"
                    align="center"
                >
                    <template v-slot:header >
                        <span class="table-header-div" >
                            <span>發生地點</span>
                            <span class="table-svg-div" @click="locationFilter()">
                                <svg v-if="optionLcation" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" style="margin-top: 3px;">
                                    <rect class="option_selected_a" width="30" height="30" rx="6"/>
                                    <g transform="translate(-1111.216 -74)">
                                        <rect class="option_selected_b" width="18" height="2" transform="translate(1117.216 81)"/>
                                        <rect class="option_selected_b" width="12" height="2" transform="translate(1117.216 88)"/>
                                        <rect class="option_selected_b" width="6" height="2" transform="translate(1117.216 95)"/>
                                    </g>
                                </svg>
                                <svg v-else xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" style="margin-top: 3px;">
                                    <rect class="option_a" width="30" height="30" rx="6"/>
                                    <g transform="translate(-1111.216 -74)">
                                        <rect width="18" height="2" transform="translate(1117.216 81)"/>
                                        <rect width="12" height="2" transform="translate(1117.216 88)"/>
                                        <rect width="6" height="2" transform="translate(1117.216 95)"/>
                                    </g>
                                </svg>
                            </span>
                        </span>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="dispatchUnit"
                        label="派遣分隊"
                        sortable
                        min-width="19"
                        align="center"
                ></el-table-column>
                <el-table-column
                    prop="status"
                    label="執行情況"
                    min-width="17"
                    align="center"
                    >
                    <template slot="header">
                        <span class="table-header-div" >
                            <span>執行情況</span>
                            <span class="table-svg-div" @click="statusFilter()">
                                <svg v-if="optionStatus" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" style="margin-top: 3px;">
                                    <rect class="option_selected_a" width="30" height="30" rx="6"/>
                                    <g transform="translate(-1111.216 -74)">
                                        <rect class="option_selected_b" width="18" height="2" transform="translate(1117.216 81)"/>
                                        <rect class="option_selected_b" width="12" height="2" transform="translate(1117.216 88)"/>
                                        <rect class="option_selected_b" width="6" height="2" transform="translate(1117.216 95)"/>
                                    </g>
                                </svg>
                                <svg v-else xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" style="margin-top: 3px;">
                                    <rect class="option_a" width="30" height="30" rx="6"/>
                                    <g transform="translate(-1111.216 -74)">
                                        <rect width="18" height="2" transform="translate(1117.216 81)"/>
                                        <rect width="12" height="2" transform="translate(1117.216 88)"/>
                                        <rect width="6" height="2" transform="translate(1117.216 95)"/>
                                    </g>
                                </svg>
                            </span>
                        </span>
                    </template>
                    <template slot-scope="scope">
                        <div :class="carried[scope.row.status]">{{scope.row.status}}</div>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="table-try" id="tab" v-show="optionLcation">
            <div  v-for="(item, index) in locationData" :key="index" >
                <el-checkbox :id="`tab-${index}`" v-model="item.checked" @change="filterChecked(locationData)">{{item.text}}</el-checkbox>
            </div>
        </div>
        <div class="table-try" v-show="optionStatus">
            <div v-for="(item, index) in statusData" :key="index" >
                <el-checkbox v-model="item.checked" @change="filterChecked(statusData)">{{item.text}}</el-checkbox>
            </div>
        </div>
    </div>
</template>
<script>
    import {getApiurl} from '@/api'
    import moment from 'moment'

    const cheerio = require('cheerio');
    export default {
        name: 'App',
        components: {},
        data: () => {
            return {
                newData: '',
                oneTime: 0,
                showData: [],
                allData:[],
                timeData: [
                    {text: '今天', value: '今天'},
                    {text: '昨天', value: '昨天'},
                ],
                caseClassData: [],
                caseData: [],
                dispatchUnitData: [],
                statusData: [],
                locationData: [
                    {text: '沙鹿', value: '沙鹿', checked: false},
                    {text: '梧棲', value: '梧棲', checked: false},
                    {text: '清水', value: '清水', checked: false},
                    {text: '龍井', value: '龍井', checked: false},
                    {text: '大肚', value: '大肚', checked: false}
                ],
                locationFilters: [ '沙鹿', '梧棲', '清水', '龍井', '大肚' ],
                getNowTime: '',
                carried: {
                   '已受理' : 'accepted' ,
                   '已出動' : 'dispatched' ,
                   '已到達' : 'arrived' ,
                   '送醫中' : 'goHospital' ,
                   '已到院' : 'inHospital' ,
                   '返隊中' : 'goTeam' ,
                   '已返隊' : 'inTeam' ,
                   '已派遣' : 'dispatched'
                },
                optionStatus: false,
                optionLcation: false
            }
        },
        mounted() {
            this.getData()
            let self = this
            setInterval(function () {
                console.log('update')
                self.getData()
            }, 5000)
            window.addEventListener('resize', function(){
                if(self.optionLcation == true){
                    self.filterPosition('el-table_1_column_5',0)
                }
                if(self.optionStatus == true){
                    self.filterPosition('el-table_1_column_7',1)
                }
            }, true)
            document.addEventListener('click', function(evet){
                if( (evet.target.className !== 'el-checkbox__inner')&&(evet.target.className !== 'el-checkbox__original') ){
                    self.closeOption()
                }
            }, true)
        },
        watch:{
        },
        methods: {
            closeOption(){
                console.log('close')
                if(this.optionLcation == true){
                    this.optionLcation = false
                }
                if(this.optionStatus == true){
                    this.optionStatus = false
                }
            },
            filterChecked(filterData){
                this.showData = []
                let filter = []
                let haschack = false
                filterData.map(element=>{
                    if( element.checked == true ){
                        haschack = true
                    }
                }  )
                this.showData = this.allData
                if(haschack == true ){
                    this.showData.forEach(ele=>{
                        filterData.forEach(element=>{
                            if(element.checked == true && (ele.location.indexOf(element.text) >= 0 || ele.status.indexOf(element.text) >= 0)){
                                filter.push(ele);
                            }
                        })
                    })
                    this.showData = filter
                }
            },
            locationFilter(){
                if(this.optionLcation){
                    this.optionLcation = false
                }else{
                    this.optionLcation = true
                }
                this.filterPosition('el-table_1_column_5',0)
            },
            filterPosition(Eltablediv,index){
                var tableDiv = document.getElementsByClassName('table-header-div'); //H:36 L:25 T:0 W:167 //offsetHeight:36 offsetLeft:71
                var tableDiv2 = document.getElementsByClassName('table'); //H:363 L:0 T:0 W:890  //offsetLeft:8 offsetTop:56
                var EltableDiv = document.getElementsByClassName(Eltablediv); //H:86 L:1 T:1 W:216 //offsetLeft: 558 //offsetHeight: 90
                // console.log(tableDiv)
                // console.log(tableDiv2)
                // console.log(EltableDiv)
                document.getElementsByClassName('table-try')[index].setAttribute(
                    "style",
                    "left:" + (EltableDiv[0].offsetLeft+tableDiv[index].offsetLeft+tableDiv2[0].offsetLeft)  +
                    "px; top:" + (tableDiv2[0].offsetTop+tableDiv[index].offsetHeight+14) + "px;"
                )
            },
            statusFilter(){
                if(this.optionStatus){
                    this.optionStatus = false
                }else{
                    this.optionStatus = true
                }
                this.filterPosition('el-table_1_column_7',1)
            },
            async play() {
                var audio = await document.getElementById("Music");
                audio.muted = await false;
                var promise = document.querySelector('audio').play();
                if (promise !== undefined) {
                    promise.then(
                        console.log('audio true')
                    ).catch(error => {
                        console.log(error)
                    });
                }

            },
            async getData() {
                console.log('getData')
                this.newData = await getApiurl()
                this.sortOut()
                this.getNowTime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')

            },
            sortOut() {
                const $ = cheerio.load(this.newData)
                let self = this
                let tdData = []
                let number = 1
                this.allData = []
                $('#dataTable tr').map(function () {
                    $(this).children("td").map(function () {
                        tdData.push($(this).text())
                    })
                    if ((Date.parse(new Date()) - 172800000) < Date.parse(tdData[1])) {
                        self.locationFilters.forEach(element => {
                            // if (tdData[4].indexOf(element) >= 0 && (tdData[3] == '車禍' || tdData[3] == '急病')) {
                            if (tdData[4].indexOf(element) >= 0) {
                                self.allData.push(
                                    {
                                        serial: number,
                                        time: tdData[1],
                                        caseClass: tdData[2],
                                        case: tdData[3],
                                        location: tdData[4],
                                        dispatchUnit: tdData[5],
                                        status: tdData[6]
                                    }
                                )
                                number++
                            }
                        })
                    }
                    tdData = []
                })
                if (this.allData.length > 0) {
                    if (this.oneTime < Date.parse(this.allData[0].time)) {
                        console.log(this.oneTime)
                        this.play()
                    }

                    this.showData = this.allData
                    this.oneTime = Date.parse(this.showData[0].time)
                    this.showData.forEach(element => {
                            this.caseClassData = this.caseClassData.filter(item => item.text !== element.caseClass)
                            this.caseClassData.push({
                                text: element.caseClass,
                                value: element.caseClass,
                            })
                            this.caseData = this.caseData.filter(item => item.text !== element.case)
                            this.caseData.push({
                                text: element.case,
                                value: element.case,
                            })
                            this.dispatchUnitData = this.dispatchUnitData.filter(item => item.text !== element.dispatchUnit)
                            this.dispatchUnitData.push({
                                text: element.dispatchUnit,
                                value: element.dispatchUnit,
                            })
                            this.statusData = this.statusData.filter(item => item.text !== element.status)
                            this.statusData.push({
                                text: element.status,
                                value: element.status,
                                checked: false
                            })
                        }
                    )
                }

            },
            filterHandler(value, row, column) {
                const property = column['property'];
                return row[property] === value;
            },
            filterTime(value, row) {
                if (value == '今天') {
                    if (Date.parse(new Date()) - 86400000 < Date.parse(row.time)) {
                        return true
                    }
                } else if (value == '昨天') {
                    if (Date.parse(new Date()) - 86400000 > Date.parse(row.time)) {
                        return true
                    }
                }
            },
            filterLocationTag(value, row) {
                if (row.location.indexOf(value) >= 0) {
                    return true
                }
            },
            filterStatusTag(value, row) {
                if (row.status.indexOf(value) >= 0) {
                    return true
                }
            },
        }
    }
</script>
<style scoped>
    .option_selected_a { fill:#fc9e31; }
    .option_selected_b { fill:#fff; }
    .option_a { fill:#f5f5f5; }
    .emergency_a,.emergency_e { fill:#fff; }
    .emergency_a { stroke:#f2f2f2;stroke-miterlimit:10; }
    .emergency_b { fill:#e6e6e6; }
    .emergency_c { fill:#ff6e6e; }
    .emergency_d { fill:#ff5252; }
    .fire_a { fill:#fff;stroke:#f2f2f2;stroke-miterlimit:10; }
    .fire_b { fill:#ff6b5c; }
    .fire_c { fill:#ff8f7f; }
    .fire_d { fill:#ff5252; }
    .fire_e { fill:#f33; }
    .pack_a { fill:#fff;stroke:#f2f2f2;stroke-miterlimit:10; }
    .pack_b { fill:#384949; }
    .pack_c { fill:#293939; }
    .pack_d { fill:#3e5959; }
    .pack_e { fill:#73bcff; }
    .pack_f { fill:#3aaaff; }
    .pack_g { fill:#ede9e8; }
    .pack_h { fill:#dfd7d5; }
    .work_a { fill:#fff;stroke:#f2f2f2;stroke-miterlimit:10; }
    .work_b { fill:#cee1f2; }
    .work_c { fill:#009245; }
    .work_d { fill:none;stroke:#009245;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px; }
    .el-table >>> th {
        background-color: #FAFAFA;
        border-bottom:4px solid #CCCCCC;
        border-left:1px solid #FFFFFF;
    }
    .el-table >>> .el-table__column-filter-trigger .el-icon-arrow-down{
        display:none;
    }
    .table-try .is-checked >>> .el-checkbox__inner{
        background-color: #FC9E31;
        border-color: #FC9E31;
    }
    .table-try .is-checked >>> .el-checkbox__inner::after{
        height: 10px;
        padding: 1px 2px;
        left: 6px;
    }
    .el-checkbox >>> .el-checkbox__inner:hover{
        border-color: #FC9E31;
    }
    .el-checkbox >>> .el-checkbox__inner{
        width: 24px;
        height: 24px;
    }
    .el-checkbox >>> .el-checkbox__label{
        font-size: 18px;
        margin-left: 8px;
    }
    .table-try .is-checked >>> .el-checkbox__label{
        color: #FC9E31;
        font-size: 18px;
        margin-left: 8px;
    }
    .el-table >>> tbody .el-table_1_column_4 .cell {
        color: #FF3333;
        font-size: 16px;
    }
    .el-table >>> .descending .caret-wrapper .descending{
        border-top-color: #F15A24 !important;
    }
    .el-table >>> .ascending .caret-wrapper .ascending {
        border-bottom-color: #F15A24 !important;
    }
    .el-table >>> td .cell {
        color: #333333;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;

    }
    .el-table >>> thead {
        color: #000000;
        font-size: 18px;
    }
    #Music {
        display: none
    }
    .time-div{
        margin-bottom: 17px;
        margin-top: 18px;
        display: flex;
    }
    .icon-div {
        float: left;
        color: #666666;
        text-align: left;
        letter-spacing: 0px;
        margin-left: 21px;
        font-size: 18px;
    }
    .newTime-div {
        float: left;
        color: #F15A24;
        text-align: left;
        letter-spacing: 0px;
        font-size: 18px;
    }
    .accepted {
        width: 120px;
        height: 40px;
        border-radius: 20px;
        color: #000;
        font-size: 16px;
        padding: 9px 36px;
        background-color: #FF8E88;
    }
    .dispatched {
        width: 120px;
        height: 40px;
        border-radius: 20px;
        color: #000;
        font-size: 16px;
        padding: 9px 36px;
        background-color: #FFCD5F;
    }
    .arrived{
        width: 120px;
        height: 40px;
        border-radius: 20px;
        color: #000;
        font-size: 16px;
        padding: 9px 36px;
        background-color: #EAE54B;
    }
    .goHospital{
        width: 120px;
        height: 40px;
        border-radius: 20px;
        color: #000;
        font-size: 16px;
        padding: 9px 36px;
        background-color: #A1E5B5;
    }
    .inHospital{
        width: 120px;
        height: 40px;
        border-radius: 20px;
        color: #000;
        font-size: 16px;
        padding: 9px 36px;
        background-color: #A8E4F4;
    }
    .goTeam{
        width: 120px;
        height: 40px;
        border-radius: 20px;
        color: #000;
        font-size: 16px;
        padding: 9px 36px;
        background-color: #DDCEBF;
    }
    .inTeam{
        width: 120px;
        height: 40px;
        border-radius: 20px;
        color: #000;
        font-size: 16px;
        padding: 9px 36px;
        background-color: #E6E6E6;
    }
    .table-svg-div{
        vertical-align: middle;
        margin-left: 43px;
    }
    .table-header-div{
        border: 1px solid #E6E6E6;
        background-color: #FFFFFF;
        padding: 7px 10px;
        position: relative;
    }
    .caseClassList-div{
        vertical-align: middle;
        margin-left: 10px;
    }
    .table-try{
        width: 145px;
        padding: 7px 10px;
        float: left;
        border: 1px solid #E6E6E6;
        background-color: #FFFFFF;
        position: absolute;
        z-index: 999px;
    }
    .table{
        width: 100%;
        position:absolute;
        z-index: 1px;
    }
    #app{
        position:relative;
        z-index: 1px;
    }
</style>
