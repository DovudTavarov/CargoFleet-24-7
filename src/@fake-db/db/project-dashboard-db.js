import generateDayWiseTimeSeries from '@fake-db/utils';
import mock from '../mock';

const projectDashboardAppDB = {
  widgets: [
    {
      id: 'widget1',
      ranges: {
        Active: 'Active',
        Inactive: 'Inactive',
        InShop: 'In Shop'
      },
      currentRange: 'Active',
      data: {
        name: 'Vehicle Status',
        count: {
          Active: 3,
          Inactive: 1,
          InShop: 1
        }
        // extra: {
        //   name: 'Completed',
        //   count: {
        //     Active: 6,
        //     Inactive: 7,
        //     InShop: '-'
        //   }
        // }
      },
      detail: 'You can show some detailed information about this widget in here.'
    },
    {
      id: 'widget2',
      ranges: {
        Assigned: 'Assigned',
        Unassigned: 'Unassigned'
      },
      currentRange: 'Assigned',
      data: {
        name: 'Vehicle Assignments',
        count: {
          Assigned: 4,
          Unassigned: 2
        }
        // extra: {
        //   name: 'Completed',
        //   count: {
        //     Assigned: 6,
        //     Unassigned: 7
        //   }
        // }
      },
      detail: 'You can show some detailed information about this widget in here.'
    },
    {
      id: 'widget3',
      title: 'Issues',
      data: {
        name: 'Open',
        count: 5,
        extra: {
          name: 'Overdue',
          count: 1
        }
      },
      detail: 'You can show some detailed information about this widget in here.'
    },
    {
      id: 'widget4',
      ranges: {
        Service: 'Service',
        VehicleRenewal: 'Vehicle Renewal'
      },
      currentRange: 'Service',
      data: {
        name: 'Due',
        count: {
          Service: 3,
          VehicleRenewal: 2
        },
        extra: {
          name: 'Overdue',
          count: {
            Service: 3,
            VehicleRenewal: 2
          }
        }
      },
      detail: 'You can show some detailed information about this widget in here.'
    },
    {
      id: 'widget5',
      title: 'Costs',
      ranges: {
        Fuel: 'Fuel',
        Service: 'Service',
        Total: 'Total'
      },
      mainChart: {
        Fuel: {
          series: [
            {
              name: 'Fuel',
              data: [1100, 1000, 800, 1100, 800, 1000, 170]
            }
          ]
        },
        Service: {
          labels: {
            formatter: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            style: {
              fontSize: '16px',
              fontFamily: 'Helvetica, Arial, sans-serif'
            }
          },
          series: [
            {
              name: 'Service',
              data: [3700, 200, 3900, 2700, 800, 400, 4000]
            }
          ]
        },
        Total: {
          labels: {
            formatter: [
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
              'August',
              'September',
              'October',
              'November',
              'December'
            ],
            style: {
              fontSize: '16px',
              fontFamily: 'Helvetica, Arial, sans-serif'
            }
          },
          series: [
            {
              name: 'Total',
              data: [4800, 1200, 4600, 3800, 1600, 1400, 4170]
            }
          ]
        },
        options: {
          chart: {
            height: '100%',
            type: 'bar',
            stacked: true,
            toolbar: {
              show: false
            }
          },
          plotOptions: {
            bar: {
              columnWidth: '90%',
              horizontal: false
            }
          },
          xaxis: {
            categories: [
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
              'August',
              'September',
              'October',
              'November',
              'December'
            ],
            labels: {
              style: {
                fontSize: '16px',
                fontFamily: 'Helvetica, Arial, sans-serif'
              }
            }
          },
          yaxis: {
            labels: {
              style: {
                fontSize: '16px',
                fontFamily: 'Helvetica, Arial, sans-serif'
              }
            }
          },
          fill: {
            opacity: 1
          },
          tooltip: {
            followCursor: true,
            theme: 'dark',
            fixed: {
              enabled: false,
              position: 'topRight',
              offsetX: 0,
              offsetY: 0
            }
          },
          legend: {
            show: false
          },
          dataLabels: {
            enabled: false
          }
        }
      }
    },
    {
      id: 'widget6',
      title: 'Task Distribution',
      ranges: {
        TW: 'This Week',
        LW: 'Last Week',
        '2W': '2 Weeks Ago'
      },
      currentRange: 'TW',
      mainChart: {
        series: {
          TW: [15, 20, 38, 27],
          LW: [19, 16, 42, 23],
          '2W': [18, 17, 40, 25]
        },
        options: {
          series: [76, 67, 61],
          chart: {
            height: '100%',
            type: 'polarArea'
          },
          stroke: {
            width: 1,
            colors: undefined
          },
          fill: {
            type: 'solid',
            opacity: 0.7
          },
          legend: {
            position: 'bottom'
          },
          theme: {
            monochrome: {
              enabled: true,
              shadeTo: 'light',
              shadeIntensity: 0.65
            }
          },
          labels: ['Frontend', 'Backend', 'API', 'Issues']
        }
      },
      footerLeft: {
        title: 'Tasks Added',
        count: {
          '2W': 487,
          LW: 526,
          TW: 594
        }
      },
      footerRight: {
        title: 'Tasks Completed',
        count: {
          '2W': 193,
          LW: 260,
          TW: 287
        }
      }
    },
    {
      id: 'widget7',
      title: 'Schedule',
      currentRange: 'T',
      ranges: {
        T: 'Today',
        TM: 'Tomorrow'
      },
      schedule: {
        T: [
          {
            id: 1,
            title: 'Group Meeting',
            time: 'In 32 minutes'
          },
          {
            id: 2,
            title: 'Coffee Break',
            time: '10:30 AM'
          },
          {
            id: 3,
            title: 'Public Beta Release',
            time: '11:00 AM'
          },
          {
            id: 4,
            title: 'Lunch',
            time: '12:10 PM'
          },
          {
            id: 5,
            title: 'Dinner with David',
            time: '17:30 PM'
          },
          {
            id: 6,
            title: "Jane's Birthday Party",
            time: '19:30 PM'
          },
          {
            id: 7,
            title: "Overseer's Retirement Party",
            time: '21:30 PM'
          }
        ],
        TM: [
          {
            id: 1,
            title: 'Marketing Meeting',
            time: '09:00 AM'
          },
          {
            id: 2,
            title: 'Public Announcement',
            time: '11:00 AM'
          },
          {
            id: 3,
            title: 'Lunch',
            time: '12:10 PM'
          },
          {
            id: 4,
            title: 'Meeting with Beta Testers',
            time: '15:00 AM'
          },
          {
            id: 5,
            title: 'Live Stream',
            time: '17:30 PM'
          },
          {
            id: 6,
            title: 'Release Party',
            time: '19:30 PM'
          },
          {
            id: 7,
            title: "CEO's Party",
            time: '22:30 PM'
          }
        ]
      }
    },
    {
      id: 'widget8',
      title: 'Inspection Summary',
      mainChart: {
        series: [66.7, 33.3],
        options: {
          chart: {
            height: '100%',
            type: 'pie'
          },
          name: {
            fontSize: '16px',
            fontFamily: 'Helvetica, Arial, sans-serif'
          },
          stroke: {
            width: 1,
            colors: undefined
          },
          fill: {
            opacity: 1
          },
          legend: {
            position: 'bottom',
            fontSize: '16px',
            fontFamily: 'Helvetica, Arial, sans-serif'
          },
          theme: {
            monochrome: {
              enabled: true,
              shadeTo: 'light',
              shadeIntensity: 0.65
            }
          },
          labels: ['with 0 inspections', 'With > 0 inspections']
        }
      }
    },
    {
      id: 'widget9',
      title: 'Spent',
      ranges: {
        TW: 'This Week',
        LW: 'Last Week',
        '2W': '2 Weeks Ago'
      },
      currentRange: 'TW',
      weeklySpent: {
        title: 'WEEKLY SPENT',
        count: {
          '2W': '2,682.85',
          LW: '1,445.34',
          TW: '3,630.15'
        },
        chart: {
          '2W': {
            series: [
              {
                name: 'Created',
                data: [2, 6, 5, 4, 5, 3, 6]
              }
            ]
          },
          LW: {
            series: [
              {
                name: 'Created',
                data: [4, 6, 2, 2, 1, 3, 4]
              }
            ]
          },
          TW: {
            series: [
              {
                name: 'Created',
                data: [2, 6, 5, 4, 5, 3, 6]
              }
            ]
          },
          options: {
            chart: {
              type: 'area',
              height: '100%',
              sparkline: {
                enabled: true
              }
            },
            stroke: { width: 2 },
            grid: {
              padding: {
                top: 10,
                right: 0,
                bottom: 10,
                left: 0
              }
            },
            fill: {
              type: 'solid',
              opacity: 0.7
            },
            tooltip: {
              followCursor: true,
              theme: 'dark',
              fixed: {
                enabled: false,
                position: 'topRight',
                offsetX: 0,
                offsetY: 0
              }
            },
            xaxis: {
              categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
            }
          }
        }
      },
      totalSpent: {
        title: 'TOTAL SPENT',
        count: {
          '2W': '29,682.85',
          LW: '31,128.19',
          TW: '34,758.34'
        },
        chart: {
          '2W': {
            series: [
              {
                name: 'Created',
                data: [3, 2, 2, 4, 7, 7, 4]
              }
            ]
          },
          LW: {
            series: [
              {
                name: 'Created',
                data: [5, 7, 8, 8, 6, 4, 1]
              }
            ]
          },
          TW: {
            series: [
              {
                name: 'Created',
                data: [6, 4, 7, 5, 5, 4, 7]
              }
            ]
          },
          options: {
            chart: {
              type: 'area',
              height: '100%',
              sparkline: {
                enabled: true
              }
            },
            stroke: { width: 2 },
            grid: {
              padding: {
                top: 10,
                right: 0,
                bottom: 10,
                left: 0
              }
            },
            fill: {
              type: 'solid',
              opacity: 0.7
            },
            tooltip: {
              followCursor: true,
              theme: 'dark',
              fixed: {
                enabled: false,
                position: 'topRight',
                offsetX: 0,
                offsetY: 0
              }
            },
            xaxis: {
              categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
            }
          }
        }
      },
      remaining: {
        title: 'REMAINING',
        count: {
          '2W': '94.317,15',
          LW: '92.871,81',
          TW: '89.241,66'
        },
        chart: {
          '2W': {
            series: [
              {
                name: 'Created',
                data: [1, 4, 5, 7, 8, 2, 4],
                fill: true,
                backgroundColor: '#42BFF7',
                pointRadius: 0,
                pointHitRadius: 20,
                borderWidth: 0
              }
            ]
          },
          LW: {
            series: [
              {
                name: 'Created',
                data: [3, 2, 1, 4, 8, 8, 4],
                fill: true,
                backgroundColor: '#42BFF7',
                pointRadius: 0,
                pointHitRadius: 20,
                borderWidth: 0
              }
            ]
          },
          TW: {
            series: [
              {
                name: 'Created',
                data: [2, 4, 8, 6, 2, 5, 1],
                fill: true,
                backgroundColor: '#42BFF7',
                pointRadius: 0,
                pointHitRadius: 20,
                borderWidth: 0
              }
            ]
          },
          options: {
            chart: {
              type: 'area',
              height: '100%',
              sparkline: {
                enabled: true
              }
            },
            stroke: { width: 2 },
            grid: {
              padding: {
                top: 10,
                right: 0,
                bottom: 10,
                left: 0
              }
            },
            fill: {
              type: 'solid',
              opacity: 0.7
            },
            tooltip: {
              followCursor: true,
              theme: 'dark',
              fixed: {
                enabled: false,
                position: 'topRight',
                offsetX: 0,
                offsetY: 0
              }
            },
            xaxis: {
              categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
            }
          }
        }
      },
      totalBudget: {
        title: 'TOTAL BUDGET',
        count: '124.000,00'
      }
    },
    {
      id: 'widget10',
      title: 'Budget Details',
      table: {
        columns: [
          {
            id: 'budget_type',
            title: 'Budget Type'
          },
          {
            id: 'total_budget',
            title: 'Total Budget'
          },
          {
            id: 'spent_usd',
            title: 'Spent ($)'
          },
          {
            id: 'spent_perc',
            title: 'Spent (%)'
          },
          {
            id: 'remaining_usd',
            title: 'Remaining ($)'
          },
          {
            id: 'remaining_perc',
            title: 'Remaining (%)'
          }
        ],
        rows: [
          {
            id: 1,
            cells: [
              {
                id: 'budget_type',
                value: 'Wireframing',
                classes: 'bg-blue text-white',
                icon: ''
              },
              {
                id: 'total_budget',
                value: '$14,880.00',
                classes: 'font-semibold',
                icon: ''
              },
              {
                id: 'spent_usd',
                value: '$14,000.00',
                classes: '',
                icon: ''
              },
              {
                id: 'spent_perc',
                value: '%94.08',
                classes: 'text-green',
                icon: 'trending_up'
              },
              {
                id: 'remaining_usd',
                value: '$880.00',
                classes: '',
                icon: ''
              },
              {
                id: 'remaining_perc',
                value: '%5.92',
                classes: '',
                icon: ''
              }
            ]
          },
          {
            id: 2,
            cells: [
              {
                id: 'budget_type',
                value: 'Design',
                classes: 'bg-green text-white',
                icon: ''
              },
              {
                id: 'total_budget',
                value: '$21,080.00',
                classes: 'font-semibold',
                icon: ''
              },
              {
                id: 'spent_usd',
                value: '$17,240.34',
                classes: '',
                icon: ''
              },
              {
                id: 'spent_perc',
                value: '%81.78',
                classes: 'text-green',
                icon: 'trending_up'
              },
              {
                id: 'remaining_usd',
                value: '$3,839.66',
                classes: '',
                icon: ''
              },
              {
                id: 'remaining_perc',
                value: '%18.22',
                classes: '',
                icon: ''
              }
            ]
          },
          {
            id: 3,
            cells: [
              {
                id: 'budget_type',
                value: 'Coding',
                classes: 'bg-red text-white',
                icon: ''
              },
              {
                id: 'total_budget',
                value: '$34,720.00',
                classes: 'font-semibold',
                icon: ''
              },
              {
                id: 'spent_usd',
                value: '$3,518.00',
                classes: '',
                icon: ''
              },
              {
                id: 'spent_perc',
                value: '%10.13',
                classes: 'text-red',
                icon: 'trending_down'
              },
              {
                id: 'remaining_usd',
                value: '$31,202.00',
                classes: '',
                icon: ''
              },
              {
                id: 'remaining_perc',
                value: '%89.87',
                classes: '',
                icon: ''
              }
            ]
          },
          {
            id: 4,
            cells: [
              {
                id: 'budget_type',
                value: 'Marketing',
                classes: 'bg-pink text-white',
                icon: ''
              },
              {
                id: 'total_budget',
                value: '$34,720.00',
                classes: 'font-semibold',
                icon: ''
              },
              {
                id: 'spent_usd',
                value: '$0.00',
                classes: '',
                icon: ''
              },
              {
                id: 'spent_perc',
                value: '%0.00',
                classes: 'text-blue',
                icon: 'trending_flat'
              },
              {
                id: 'remaining_usd',
                value: '$34,720.00',
                classes: '',
                icon: ''
              },
              {
                id: 'remaining_perc',
                value: '%100.00',
                classes: '',
                icon: ''
              }
            ]
          },
          {
            id: 5,
            cells: [
              {
                id: 'budget_type',
                value: 'Extra',
                classes: 'bg-orange text-white',
                icon: ''
              },
              {
                id: 'total_budget',
                value: '$18,600.00',
                classes: 'font-semibold',
                icon: ''
              },
              {
                id: 'spent_usd',
                value: '$0.00',
                classes: '',
                icon: ''
              },
              {
                id: 'spent_perc',
                value: '%0.00',
                classes: 'text-blue',
                icon: 'trending_flat'
              },
              {
                id: 'remaining_usd',
                value: '$34,720.00',
                classes: '',
                icon: ''
              },
              {
                id: 'remaining_perc',
                value: '%100.00',
                classes: '',
                icon: ''
              }
            ]
          }
        ]
      }
    },
    {
      id: 'widget11',
      title: 'Team Members',
      table: {
        columns: [
          {
            id: 'avatar',
            title: ''
          },
          {
            id: 'name',
            title: 'Name'
          },
          {
            id: 'position',
            title: 'Position'
          },
          {
            id: 'office',
            title: 'Office'
          },
          {
            id: 'email',
            title: 'Email'
          },
          {
            id: 'phone',
            title: 'Phone'
          }
        ],
        rows: [
          {
            id: 1,
            cells: [
              {
                id: 'avatar',
                value: 'assets/images/avatars/james.jpg'
              },
              {
                id: 'name',
                value: 'Jack Gilbert'
              },
              {
                id: 'position',
                value: 'Design Manager'
              },
              {
                id: 'office',
                value: 'Johor Bahru'
              },
              {
                id: 'email',
                value: 'jgilbert48@mail.com'
              },
              {
                id: 'phone',
                value: '+16 298 032 7774'
              }
            ]
          },
          {
            id: 2,
            cells: [
              {
                id: 'avatar',
                value: 'assets/images/avatars/katherine.jpg'
              },
              {
                id: 'name',
                value: 'Kathy Anderson'
              },
              {
                id: 'position',
                value: 'Recruiting Manager'
              },
              {
                id: 'office',
                value: 'Solţānābād'
              },
              {
                id: 'email',
                value: 'kanderson49@mail.com.br'
              },
              {
                id: 'phone',
                value: '+23 572 311 1136'
              }
            ]
          },
          {
            id: 3,
            cells: [
              {
                id: 'avatar',
                value: 'assets/images/avatars/garry.jpg'
              },
              {
                id: 'name',
                value: 'Gary Gonzalez'
              },
              {
                id: 'position',
                value: 'Speech Pathologist'
              },
              {
                id: 'office',
                value: 'Gangkou'
              },
              {
                id: 'email',
                value: 'ggonzalez4r@mail.cc'
              },
              {
                id: 'phone',
                value: '+10 862 046 7916'
              }
            ]
          },
          {
            id: 4,
            cells: [
              {
                id: 'avatar',
                value: 'assets/images/avatars/andrew.jpg'
              },
              {
                id: 'name',
                value: 'Mark Turner'
              },
              {
                id: 'position',
                value: 'Recruiting Manager'
              },
              {
                id: 'office',
                value: 'Neftegorsk'
              },
              {
                id: 'email',
                value: 'mturner4a@mail.com'
              },
              {
                id: 'phone',
                value: '+01 139 803 9263'
              }
            ]
          },
          {
            id: 5,
            cells: [
              {
                id: 'avatar',
                value: 'assets/images/avatars/jane.jpg'
              },
              {
                id: 'name',
                value: 'Kathryn Martinez'
              },
              {
                id: 'position',
                value: 'Director of Sales'
              },
              {
                id: 'office',
                value: 'Palekastro'
              },
              {
                id: 'email',
                value: 'kmartinez4b@mail.com'
              },
              {
                id: 'phone',
                value: '+25 467 022 5393'
              }
            ]
          },
          {
            id: 6,
            cells: [
              {
                id: 'avatar',
                value: 'assets/images/avatars/alice.jpg'
              },
              {
                id: 'name',
                value: 'Annie Gonzales'
              },
              {
                id: 'position',
                value: 'Actuary'
              },
              {
                id: 'office',
                value: 'Candon'
              },
              {
                id: 'email',
                value: 'agonzales4c@mail.edu'
              },
              {
                id: 'phone',
                value: '+99 891 619 7138'
              }
            ]
          },
          {
            id: 7,
            cells: [
              {
                id: 'avatar',
                value: 'assets/images/avatars/vincent.jpg'
              },
              {
                id: 'name',
                value: 'Howard King'
              },
              {
                id: 'position',
                value: 'Human Resources'
              },
              {
                id: 'office',
                value: 'Bergen op Zoom'
              },
              {
                id: 'email',
                value: 'hking4d@mail.gov'
              },
              {
                id: 'phone',
                value: '+46 984 348 1409'
              }
            ]
          },
          {
            id: 8,
            cells: [
              {
                id: 'avatar',
                value: 'assets/images/avatars/joyce.jpg'
              },
              {
                id: 'name',
                value: 'Elizabeth Dixon'
              },
              {
                id: 'position',
                value: 'Electrical Engineer'
              },
              {
                id: 'office',
                value: 'Písečná'
              },
              {
                id: 'email',
                value: 'edixon4e@mail.gov'
              },
              {
                id: 'phone',
                value: '+33 332 067 9063'
              }
            ]
          },
          {
            id: 9,
            cells: [
              {
                id: 'avatar',
                value: 'assets/images/avatars/danielle.jpg'
              },
              {
                id: 'name',
                value: 'Dorothy Morris'
              },
              {
                id: 'position',
                value: 'Office Assistant'
              },
              {
                id: 'office',
                value: 'Magsaysay'
              },
              {
                id: 'email',
                value: 'dmorris4f@mail.com'
              },
              {
                id: 'phone',
                value: '+05 490 958 6120'
              }
            ]
          },
          {
            id: 10,
            cells: [
              {
                id: 'avatar',
                value: 'assets/images/avatars/carl.jpg'
              },
              {
                id: 'name',
                value: 'Mark Gonzales'
              },
              {
                id: 'position',
                value: 'Quality Control'
              },
              {
                id: 'office',
                value: 'Matsue-shi'
              },
              {
                id: 'email',
                value: 'mgonzales4g@mail.com'
              },
              {
                id: 'phone',
                value: '+03 168 394 9935'
              }
            ]
          },
          {
            id: 11,
            cells: [
              {
                id: 'avatar',
                value: 'assets/images/avatars/profile.jpg'
              },
              {
                id: 'name',
                value: 'Catherine Rogers'
              },
              {
                id: 'position',
                value: 'Programmer Analyst'
              },
              {
                id: 'office',
                value: 'Kangar'
              },
              {
                id: 'email',
                value: 'crogers4h@mail.com'
              },
              {
                id: 'phone',
                value: '+86 235 407 5373'
              }
            ]
          },
          {
            id: 12,
            cells: [
              {
                id: 'avatar',
                value: 'assets/images/avatars/garry.jpg'
              },
              {
                id: 'name',
                value: 'Ruth Grant'
              },
              {
                id: 'position',
                value: 'Community Outreach'
              },
              {
                id: 'office',
                value: 'Beaune'
              },
              {
                id: 'email',
                value: 'rgrant4i@mail.pl'
              },
              {
                id: 'phone',
                value: '+36 288 083 8460'
              }
            ]
          },
          {
            id: 13,
            cells: [
              {
                id: 'avatar',
                value: 'assets/images/avatars/james.jpg'
              },
              {
                id: 'name',
                value: 'Phyllis Gutierrez'
              },
              {
                id: 'position',
                value: 'Administrative Assistant'
              },
              {
                id: 'office',
                value: 'Shlissel’burg'
              },
              {
                id: 'email',
                value: 'pgutierrez4j@mail.net'
              },
              {
                id: 'phone',
                value: '+52 749 861 9304'
              }
            ]
          },
          {
            id: 14,
            cells: [
              {
                id: 'avatar',
                value: 'assets/images/avatars/alice.jpg'
              },
              {
                id: 'name',
                value: 'Lillian Morris'
              },
              {
                id: 'position',
                value: 'Media Planner'
              },
              {
                id: 'office',
                value: 'Berlin'
              },
              {
                id: 'email',
                value: 'lmorris4k@mail.de'
              },
              {
                id: 'phone',
                value: '+59 695 110 3856'
              }
            ]
          },
          {
            id: 15,
            cells: [
              {
                id: 'avatar',
                value: 'assets/images/avatars/vincent.jpg'
              },
              {
                id: 'name',
                value: 'Jeremy Anderson'
              },
              {
                id: 'position',
                value: 'Systems Engineer'
              },
              {
                id: 'office',
                value: 'Lũng Hồ'
              },
              {
                id: 'email',
                value: 'janderson4l@mail.uk'
              },
              {
                id: 'phone',
                value: '+40 384 115 1448'
              }
            ]
          },
          {
            id: 16,
            cells: [
              {
                id: 'avatar',
                value: 'assets/images/avatars/carl.jpg'
              },
              {
                id: 'name',
                value: 'Arthur Lawrence'
              },
              {
                id: 'position',
                value: 'Nurse Practicioner'
              },
              {
                id: 'office',
                value: 'Sarkanjut'
              },
              {
                id: 'email',
                value: 'alawrence4m@mail.com'
              },
              {
                id: 'phone',
                value: '+36 631 599 7867'
              }
            ]
          },
          {
            id: 17,
            cells: [
              {
                id: 'avatar',
                value: 'assets/images/avatars/andrew.jpg'
              },
              {
                id: 'name',
                value: 'David Simmons'
              },
              {
                id: 'position',
                value: 'Social Worker'
              },
              {
                id: 'office',
                value: 'Ushumun'
              },
              {
                id: 'email',
                value: 'dsimmons4n@mail.com'
              },
              {
                id: 'phone',
                value: '+01 189 681 4417'
              }
            ]
          },
          {
            id: 18,
            cells: [
              {
                id: 'avatar',
                value: 'assets/images/avatars/danielle.jpg'
              },
              {
                id: 'name',
                value: 'Daniel Johnston'
              },
              {
                id: 'position',
                value: 'Help Desk'
              },
              {
                id: 'office',
                value: 'São Carlos'
              },
              {
                id: 'email',
                value: 'djohnston4o@mail.gov'
              },
              {
                id: 'phone',
                value: '+60 028 943 7919'
              }
            ]
          },
          {
            id: 19,
            cells: [
              {
                id: 'avatar',
                value: 'assets/images/avatars/joyce.jpg'
              },
              {
                id: 'name',
                value: 'Ann King'
              },
              {
                id: 'position',
                value: 'Internal Auditor'
              },
              {
                id: 'office',
                value: 'Liren'
              },
              {
                id: 'email',
                value: 'aking4p@mail.com'
              },
              {
                id: 'phone',
                value: '+91 103 932 6545'
              }
            ]
          },
          {
            id: 20,
            cells: [
              {
                id: 'avatar',
                value: 'assets/images/avatars/james.jpg'
              },
              {
                id: 'name',
                value: 'Phillip Franklin'
              },
              {
                id: 'position',
                value: 'VP Accounting'
              },
              {
                id: 'office',
                value: 'Soba'
              },
              {
                id: 'email',
                value: 'pfranklin4q@mail.com'
              },
              {
                id: 'phone',
                value: '+25 820 986 7626'
              }
            ]
          }
        ]
      }
    },
    {
      id: 'widget12',
      title: 'Latest Meter Readings',
      currentRange: 'TW',
      mainChart: {
        series: {
          TW: [
            {
              name: 'SAMPLE A',
              data: generateDayWiseTimeSeries(new Date('11 Feb 2020 GMT').getTime(), 10, {
                min: 300000,
                max: 600000
              })
            }
          ]
        },
        options: {
          chart: {
            width: '100%',
            height: '100%',
            type: 'scatter',
            toolbar: {
              show: false
            }
          },
          stroke: {
            width: 1,
            colors: undefined
          },
          fill: {
            type: 'solid',
            opacity: 0.9
          },
          legend: {
            position: 'bottom'
          },
          theme: {
            monochrome: {
              enabled: true,
              shadeTo: 'dark',
              shadeIntensity: 0.65
            }
          },
          xaxis: {
            type: 'datetime',
            labels: {
              style: {
                fontSize: '16px',
                fontFamily: 'Helvetica, Arial, sans-serif'
              }
            }
          },
          yaxis: {
            tickAmount: 5,
            labels: {
              style: {
                fontSize: '16px',
                fontFamily: 'Helvetica, Arial, sans-serif'
              }
            }
          }
        }
      }
    },
    {
      id: 'weatherWidget',
      locations: {
        NewYork: {
          name: 'New York',
          icon: 'rainy2',
          temp: {
            C: '22',
            F: '72'
          },
          windSpeed: {
            KMH: 12,
            MPH: 7.5
          },
          windDirection: 'NW',
          rainProbability: '98%',
          next5Days: [
            {
              name: 'Sunday',
              icon: 'rainy',
              temp: {
                C: '21',
                F: '70'
              }
            },
            {
              name: 'Monday',
              icon: 'cloudy',
              temp: {
                C: '19',
                F: '66'
              }
            },
            {
              name: 'Tuesday',
              icon: 'windy3',
              temp: {
                C: '24',
                F: '75'
              }
            },
            {
              name: 'Wednesday',
              icon: 'rainy',
              temp: {
                C: '21',
                F: '70'
              }
            },
            {
              name: 'Thursday',
              icon: 'rainy2',
              temp: {
                C: '24',
                F: '75'
              }
            }
          ]
        }
      },
      currentLocation: 'NewYork',
      tempUnit: 'C',
      speedUnit: 'KMH'
    }
  ],
  projects: [
    {
      id: 1,
      name: 'ACME Corp. Backend App'
    },
    {
      id: 2,
      name: 'ACME Corp. Frontend App'
    },
    {
      id: 3,
      name: 'Creapond'
    },
    {
      id: 4,
      name: 'Withinpixels'
    }
  ]
};

mock.onGet('/api/project-dashboard-app/widgets').reply(config => {
  return [200, projectDashboardAppDB.widgets];
});

mock.onGet('/api/project-dashboard-app/projects').reply(config => {
  return [200, projectDashboardAppDB.projects];
});
