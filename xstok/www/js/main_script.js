/*----------------DEFINED START-------------------*/

//localStorage.host = "http://192.168.0.13/webservices/";
//localStorage.host = "http://192.168.0.12/webservices/";
//localStorage.host = "http://beta.xstok.com/webservices/";
//localStorage.host = "http://fa.xstok.com/webservices/";
localStorage.host = "http://www.xstok.com/webservices/";
localStorage.device = 'Android';
localStorage.vr = 'new';
localStorage.key_code = 'euhe68vjdr1aX4F091c7aCggSMBf0A7M';
localStorage.curate_auction = 1;
localStorage.private_auction = 2;
localStorage.closed_bid_auction = 3;
localStorage.assorted_auction = 4;
localStorage.no_room_wise_auction__ = 'No Room wise Auction is Active';
localStorage.no_single_auction__ = 'No Single Auction is Active';
localStorage.tender_ends_qoute__ = 'Tender Will end in: ';
localStorage.Auction_ends_qoute__ = 'Auction Will end in: ';
localStorage.lot_created__ = 'Lot Has been created';
localStorage.lot_updated__ = 'Lot Has been updated';
localStorage.lot_already__ = 'Product is already present in other lot';
localStorage.lot_used_unused__ = 'Some product are already added';
localStorage.room_created__ = 'Room Has been created';
localStorage.room_updated__ = 'Room Has been updated';
localStorage.room_already__ = 'Lot is already Used';
localStorage.room_used_unused__ = 'Some Lot are already added';
localStorage.room_Name_Exist__ = 'Room Name already exist';
localStorage.bid_place_succ__ = 'Your Bid is placed';
localStorage.bid_No_place__ = '-';
localStorage.bid_place_alredy__ = 'You already placed a bid';
localStorage.bid_winner__ = "You can't bid again, you are the highest bidder";
localStorage.bid_select_error__ = 'Select/Enter Bid First';
localStorage.shipment_info_success__ = 'Shipment Detail Has been Saved';
localStorage.shipment_info_error__ = 'Shipment Detail has error';
localStorage.auction_expired__ = 'Offer Expired!';
localStorage.winner__ = 'You are Winning';
localStorage.winning__ = 'Winning';
localStorage.live__ = 'Ready for Bidding';
localStorage.won__ = 'Congratulations, you have Won!';
localStorage.lost__ = "Sorry, you didn't Win";
localStorage.withdraw__ = 'Withdraw';
localStorage.sold__ = 'Sold';
localStorage.losing__ = 'Losing';
localStorage.sold_out_ = 'Auction Sold Out';
localStorage.out_bid_ = 'You have been Outbid';
localStorage.withdraw_msg__ = 'You have Withdrawn';
localStorage.auction_cancel__ = 'Auction has been cancelled';
localStorage.withdraw_winner_msg__ = "Sorry you can't withdraw from this auction, you are the highest bidder";
localStorage.withdraw_sure_msg__ = "Are you sure, you want to withdraw from this lot?";
localStorage.withdraw_empty__ = 'You are not participating in this Auction';
localStorage.bid_auto_place_alredy__ = 'You have already placed an autobid for same amount!!';
localStorage.bid_auto_place_succ__ = 'Your Autobid is placed and its active';
localStorage.bid_numeric_error = 'Please enter numeric characters only';
localStorage.bid_place_error = 'Place Higher Bid';
localStorage.auto_bid_place_error = 'Auto bid lower than the min. increment amount';
localStorage.auto_bid_place_error_unit_price = 'Auto bid should be higher than the per unit price';
localStorage.auto_bid_out_error = 'You have been out bid from this lot';
localStorage.buy_now_admin_approval = 'You have the highest bid. The supplier is considering your bid as the reserve price has not been met';
localStorage.email_auction_msg = 'Hi! I found this on XSTOK and thought you might like it! Check it out now!';
localStorage.shipping_auction_msg = 'Hi! want to know more about Shipping!';
localStorage.what_are_waiting_ = 'What are you waiting for!! Enter the Game';
localStorage.Added = 'Added to => ';
localStorage.tax_vat = 'VAT';
localStorage.tax_sales_tax = 'Sales Tax';
localStorage.tax_service_tax = 'Service Tax';
localStorage.ship_xstok = 'Xstok';
localStorage.ship_other = 'Self';
localStorage.EMD_over__ = 'You have insufficient EMD. Proceed to top up EMD';
localStorage.Auction_archived_days__ = 3;
localStorage.direct_acceess = 'Direct access restricted';
localStorage.confirm_place_bid = 'You are placing a bid of ';
localStorage.confirm_place_auto_bid = 'You are placing a Auto bid of ';
//localStorage.auction_noti_text ='Auction '.$lot_name_['name'].' Has been created of category '.$l1_name.' has started on Xstok go and bid';
var currentyear = new Date().getFullYear();
var d = new Date();
lastyear = d.getFullYear() - 1;
localStorage.financialyear = lastyear + '-' + currentyear;
//localStorage.pay_type", serialize (array ("Auction", "EMD",));
localStorage.pay_type_auction = 'Auction';
localStorage.pay_type_emd = 'EMD';
localStorage.payment_type_bank_transfer = 'Bank Transfer';
localStorage.user_type_1 = 'Buyer';
localStorage.user_type_2 = 'Seller';
localStorage.pay_succ_info = 'Payment Has success';
localStorage.pay_error_info = 'Payment Has been Failed';
localStorage.trans_type_1 = 'R';
localStorage.trans_type_2 = 'P';
localStorage.payment_r = 'Receved';
localStorage.payment_n = 'Not Receved';
localStorage.order_status_1 = 'Shipment Request Pending';
localStorage.order_status_2 = 'Awaiting Payment';
localStorage.order_status_3 = 'Payment Under Process';
localStorage.order_status_4 = 'Payment Received';
localStorage.order_status_5 = 'Pending Shipment';
localStorage.order_status_6 = 'In Transit';
localStorage.order_status_7 = 'Deliverd';
localStorage.order_status_8 = 'Dispute';
localStorage.order_status_9 = 'Cancelled';
localStorage.order_status_10 = 'Closed';
localStorage.auction_won_pay_link = 'Pay Link';
localStorage.auction_won_shipment_pending = 'Shipment Request';
localStorage.order_status_shipment_request_pending = '1';
localStorage.order_status_awaiting_payment = '2';
localStorage.order_status_payment_under_process = '3';
localStorage.order_status_payment_received = '4';
localStorage.order_status_pending_shipment = '5';
localStorage.order_status_in_transit = '6';
localStorage.order_status_delivered = '7';
localStorage.order_status_dispute = '8';
localStorage.order_status_cancelled = '9';
localStorage.order_status_closed = '10';
localStorage.c_form_limit = 3;
localStorage.block_og_emd = "Blocked Orignal EMD";
localStorage.unblock_og_emd = "Unblocked Orignal EMD";
localStorage.TDS_amount = 10;
localStorage.discount = 'Discount';
localStorage.bid_now = 'Bid now';
localStorage.auto_bid_now = 'Autobid now';
localStorage.timeleft = 'Time Left';
localStorage.your_result__ = 'This auction is under Presale Review period. The bidding will take place on __st_date to __end_date.<br /><br /> Thank you for paying your EMD. You are all set to bid. Good luck!';
localStorage.your_interest__ = 'This auction is under Presale Review period. The bidding will start on __st_date to __end_date. <br /><br /> <b>You need to pay EMD of <i class="fa fa-inr"></i> __rs (__x% of List Price) to participate in this auction. </b><br /><br />If you are a first time buyer, it may take up to 24 hours to create your escrow account.<br /><br />Pay EMD now and be ready for bidding by clicking below.<br /><br />';
localStorage.first_bid_msg__ = 'Confirm your bid of Rs. confirm_bid__  Note: this will block EMD of Rs. og_emd__.';
localStorage.emd_bid_msg__ = 'You are registering interest in this auction. Your EMD of Rs. og_emd__ will be blocked.  You will receive a reminder email and sms one day before the start of the bidding period and again 3 hours before closing.';
localStorage.direct_buy_now_popup_txt  = 'Confirm direct Buy option.';
localStorage.block_emd_buy_now = 'Confirm direct Buy option. This will deduct the EMD of Rs.';
localStorage.confirm_auto_choose_val_ = 'Your auto bid value doesn\'t match auction minimum increment value <br /> <br />Choose from one of the values below';
localStorage.time_left__ = 'Time Left';
localStorage.presale_time_left = 'Review time left';
localStorage.presale = 'Presale Review';
localStorage.pay_emd = 'Pay EMD';
localStorage.emd_list_price_limit= 200000;
localStorage.not_participating__ = 'You are not participating in this auction';
localStorage.increase_bid__ = 'Make New Offer';
localStorage.s_winner__  =  'Winner';
localStorage.ext_time = 'Extended time 2 mins';
localStorage.final_my_bid__ = 'Final Price';
localStorage.hide_list_p_percent = 1;
localStorage.supp_id_list_array = [1470,1868];
/*----------------DEFINED END-------------------*/

function auction_detail(id) {
    // alert(id);
    window.location.href = 'auction_detail.html#' + id;
}

function auction_room(lot_id, room_id) {
    window.location.href = 'auction_room.html#' + lot_id + '-' + room_id;
}
function shipping_detail(lot_id, room_id) {
    window.location.href = 'shipping_detail.html#' + lot_id + '-' + room_id;
}

function bid_now() {
    $('.overlay').fadeIn();
    $("body").scrollTop(0);
    $('#bid').fadeIn();
    $('.bid_now_callout').fadeOut();
    if(localStorage.tender_period == 'No') {
        if(localStorage.tta == 0 || typeof localStorage.tta == 'undefined') {
            if($('.bid-now-select').length > 0 && !$('.bid-now-select').hasClass('hide')){
                $('.bid_drop_callout').fadeIn();
                localStorage.tta = 1;
            }
        }
    }
    $('body').bind('touchmove', function (e) {
        e.preventDefault();
    });
}

function show_callout_search () {
    $('.callout-dash').fadeIn();
    $('.callout-overlay').fadeIn();
    $('body').bind('touchmove', function (e) {
        e.preventDefault();
    });
    localStorage.callout_search = 1;
}

function show_callout_dash () {
    $('.callout-dash').fadeIn();
    $('.callout-overlay').fadeIn();
    $('body').bind('touchmove', function (e) {
        e.preventDefault();
    });
    localStorage.callout_dash = 1;
}
$('.callout-dash').click(function () {
    $('.callout-dash').fadeOut();
    $('.callout-overlay').fadeOut();
    $('body').unbind('touchmove');
});

function show_callout_auc () {
    $('.callout-dash').fadeIn();
    $('.callout-overlay').fadeIn();
    $('body').bind('touchmove', function (e) {
        e.preventDefault();
    });
    localStorage.callout_auc = 1;
}
$('.callout-dash').click(function () {
    $('.callout-dash').fadeOut();
    $('.callout-overlay').fadeOut();
    $('body').unbind('touchmove');
});
function more_detail() {
    $('.overlay').fadeIn();
    $("body").scrollTop(0);
    $('#more_detail').fadeIn();
    $('body').bind('touchmove', function (e) {
        e.preventDefault();
    });
}

$('.overlay').click(function () {
    bid_close();
    more_detail_close();
    shipping_qoute_close();
    other_close();
    $('.manage_noti').fadeOut();
    $('.add-emd').fadeOut();
    $('.refund-emd').fadeOut();
    $('#search_feedback').fadeOut();
    
});

function overlay_click () {
    $('.overlay').click(function () {
    bid_close();
    more_detail_close();
    shipping_qoute_close();
    other_close();
    $('.manage_noti').fadeOut();
    $('.add-emd').fadeOut();
    $('.refund-emd').fadeOut();
    $('#search_feedback').fadeOut();
    });
}


function more_details() {
    $('.overlay').fadeIn();
    $("body").scrollTop(0);
    $('#more_details').fadeIn();
    $('body').bind('touchmove', function (e) {
        e.preventDefault();
    });
}

function close_emd_refund () {
    $('body').unbind('touchmove');
    $('.add-emd').fadeOut();
    $('.refund-emd').fadeOut();
    $('.overlay').fadeOut();
}
function add_emd_box() {
    $('.overlay').fadeIn();
    //$("body").scrollTop(0);
    $('.add-emd ').fadeIn();
    $('.refund-emd').fadeOut();
    $('body').bind('touchmove', function (e) {
        e.preventDefault();
    });
}

function manage_noti() {
    buyer_manage_alerts();
    $('.overlay').fadeIn();
    //$("body").scrollTop(0);
    $('.manage_noti').fadeIn();
    $('body').bind('touchmove', function (e) {
        e.preventDefault();
    });
}

function refund_emd_box() {
    $('.overlay').fadeIn();
    //$("body").scrollTop(0);
    $('.add-emd ').fadeOut();
    $('.refund-emd').fadeIn();
    $('body').bind('touchmove', function (e) {
        e.preventDefault();
    });
}
function shipping_qoute() {
    more_detail_close();
    $('.overlay').fadeIn();
    $("body").scrollTop(0);
    $('#shipping_qoute').fadeIn();
    $('body').bind('touchmove', function (e) {
        e.preventDefault();
    });
}
function other() {
    more_detail_close();
    $('.overlay').fadeIn();
    $("body").scrollTop(0);
    $('#other').fadeIn();
    $('body').bind('touchmove', function (e) {
        e.preventDefault();
    });
}

function more_detail_close() {
    $('body').unbind('touchmove');
    $('#more_detail').fadeOut();
    $('#more_details').fadeOut();
    $('.overlay').fadeOut();
}
function shipping_qoute_close() {
    $('body').unbind('touchmove');
    $('#shipping_qoute').fadeOut();
    $('.overlay').fadeOut();
}
function other_close() {
    $('body').unbind('touchmove');
    $('#other').fadeOut();
    $('.overlay').fadeOut();
}

function auto_close() {   
    $('#autobid').fadeOut();
    $('.overlay').css('z-index','9');
}

function show_loader() {
    $('.overlay-loader').show();
    $('body').bind('touchmove', function (e) {
        e.preventDefault();
    });
}
function hide_loader() {
    $('body').unbind('touchmove');
    $('.overlay-loader').fadeOut();
    $('#auction_detail').fadeIn();
    $('.main-div').fadeIn();
    show_menu();
}

function show_menu() {
    $('.dashborad-image').fadeIn();
    $('.dashborad-about').fadeIn();
    $('#wrapper').css('visibility', 'visible').fadeIn();
    $('.dashbody').css('visibility', 'visible').fadeIn();
}

function buy_now(lot_id, room_id, total_bid,buy_now,discount_value,actual_price) {
   // window.location.href = 'auction_buy_now.html#' + lot_id + '-' + room_id + '-' + d;
    var title = 'Buy Now';
    var buttonlabels = 'Confirm,Cancel';
    if((actual_price / parseFloat(localStorage.limit_val)) < parseFloat(localStorage.emd_list_price_limit)) {
        var temp_actual_price = numberWithCommas(Math.round(parseFloat(actual_price) / parseFloat(localStorage.limit_val))); 
    } else {
        var temp_actual_price = numberWithCommas(Math.round(localStorage.emd_list_price_limit));
    } 
    
   /* if (confirm(localStorage.block_emd_buy_now + ' ' +temp_actual_price) == true) {
        buy_now_submit (lot_id, room_id, total_bid,buy_now,discount_value,actual_price);
    }*/
    if(parseFloat($('.my_bid_' + dynamic_lot).html().replace(/,/g, '')) > 0) {
        var msg = localStorage.direct_buy_now_popup_txt;
    } else {
        var msg = localStorage.block_emd_buy_now + ' ' +temp_actual_price;  // message
    }
    navigator.notification.confirm(
        msg,
        function(index) {
            if (index == 1) {
                buy_now_submit (lot_id, room_id, total_bid,buy_now,discount_value,actual_price);
            }
        },
        title,
        buttonlabels
    );
    // navigator.app.exitApp();
}



function buy_now_submit (lot_id, room_id, total_bid,buy_now,discount_value,actual_price) {
    if (buy_now > 0) {
        $.post(localStorage.host+'../classes/service_manage_auction.class.php?action=save_buy_now_details&total_bids=' + total_bid + '&dn_r='+room_id+'&dn_l='+lot_id+'&user_id='+localStorage.user_id+'&direct_pay_p='+buy_now+'&r_price='+discount_value+'&actual_price='+actual_price, {id: ''},
        function (data) {
            if (data) { 
                if(data == localStorage.EMD_over__){
                    x_alert(localStorage.EMD_over__);
                }else{
                    //console.log(data);
                    //console.log(data.split('/'));
                    //alert(data);
                    var lot_id = data.split('/')[2];
                    var room_id = data.split('/')[3];
                    //console.log('shipping_detail.html?#' + lot_id + '-' + room_id);
                    window.location.href = 'shipping_detail.html?#' + lot_id + '-' + room_id;
                }
            }
        }
                );
    }
}
//function buy_now(lot_id, room_id, d) {
   // window.location.href = 'auction_buy_now.html#' + lot_id + '-' + room_id + '-' + d;
//}

function bid_close() {
    $('body').unbind('touchmove');
    $('#bid').fadeOut();
    $('.overlay').fadeOut();
}

function back() {
    window.history.back();
}
function bid_counter(hash) {
    $.ajax({url: localStorage.host + '../classes/service_manage_auction.class.php', data: {action: 'load_dynamic_auction_status', dn_l: hash, dn_min_user: localStorage.min_user, user_id: localStorage.user_id, admin_id: localStorage.user_id}, type: 'get', success: function (data) {
            var bid = JSON.parse(data);
            $('.head-total-bid-text').html(bid[0]['total_bid']);

            var my_bid = bid[0]['status'];
            if (bid[0]['my_bid'] != "0") {
                my_bid = bid[0]['my_bid'];
            }
            $('.head-bid-value-text').html(my_bid);
            $('.head-percentage-text').html(bid[0]['discount_value']);
            $('.head-percentage-text').addClass('curr_per_bid_' + hash);
            $('.head-value-text').html(numberWithCommas(bid[0]['curr_bid']));
            $('.head-value-text').addClass('curr_bid_' + hash);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            /*if (textStatus === "timeout") {
             x_alert("You seem to have lost internet connection, please reconnect to get going"); window.location.href = "no_connection.html";
             }*/
        }
    });
}

function auction_assort_close_allow_buy(lot_id, room_id) {
    $.ajax({url: localStorage.host + '../classes/service_manage_auction.class.php?action=auction_assort_close_admin_approve_status&l_=' + lot_id + '&r_=' + room_id + '&u_=' + localStorage.user_id, data: {}, type: 'get', success: function (data) {
            if (data) {
                //console.log(data);
                //console.log('auction_assort_close_allow_buy');
                localStorage.auction_assort_close_allow_buy = data;
            }

        },
        error: function (jqXHR, textStatus, errorThrown) {
            /* if (textStatus === "timeout") {
             x_alert("You seem to have lost internet connection, please reconnect to get going"); window.location.href = "no_connection.html";
             }*/
        }
    });
}

function supplier_circle() {

    $.ajax({url: localStorage.host + '../classes/service_manage_auction.class.php?action=get_buyer_supplier_circle_company_id&user_id=' + localStorage.user_id, data: {}, type: 'get', success: function (data) {
            if (data) {
                var supplier_circle = JSON.parse(data);
                localStorage.buyer_user_id = supplier_circle[0]['buyer_user_id'];
                //console.log(supplier_circle);
            }

        },
        error: function (jqXHR, textStatus, errorThrown) {
            /*  if (textStatus === "timeout") {
             x_alert("You seem to have lost internet connection, please reconnect to get going"); window.location.href = "no_connection.html";
             }*/
        }
    });
}
function page_view(lot_id, room_id) {
    var agent = navigator.appCodeName + '-' + navigator.appVersion.split(' ')[0];
    $.ajax({url: localStorage.host + '../classes/common.class.php', data: {action: 'update_view_auction_visit_count', lot_id: lot_id, room_id: rc4_er(room_id), user_id: localStorage.user_id, agent: agent}, type: 'get', success: function (data) {
            var bid = JSON.parse(data);

            $('.head-user-per-text').html(bid);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            /* if (textStatus === "timeout") {
             x_alert("You seem to have lost internet connection, please reconnect to get going"); window.location.href = "no_connection.html";
             }*/
        }
    });
}

function bin2hex(s) {
    //  discuss at: http://phpjs.org/functions/bin2hex/
    // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // bugfixed by: Onno Marsman
    // bugfixed by: Linuxworld
    // improved by: ntoniazzi (http://phpjs.org/functions/bin2hex:361#comment_177616)
    //   example 1: bin2hex('Kev');
    //   returns 1: '4b6576'
    //   example 2: bin2hex(String.fromCharCode(0x00));
    //   returns 2: '00'

    var i, l, o = '',
            n;
    s += '';
    for (i = 0, l = s.length; i < l; i++) {
        n = s.charCodeAt(i)
                .toString(16);
        o += n.length < 2 ? '0' + n : n;
    }

    return o;
}

function hex2bin(hex)
{
    var bytes = [], str;
    for (var i = 0; i < hex.length - 1; i += 2)
        bytes.push(parseInt(hex.substr(i, 2), 16));
    return String.fromCharCode.apply(String, bytes);
}

function rc4_fun(key, str) {
    var s = [], j = 0, x, res = '';
    for (var i = 0; i < 256; i++) {
        s[i] = i;
    }
    for (i = 0; i < 256; i++) {
        j = (j + s[i] + key.charCodeAt(i % key.length)) % 256;
        x = s[i];
        s[i] = s[j];
        s[j] = x;
    }
    i = 0;
    j = 0;
    for (var y = 0; y < str.length; y++) {
        i = (i + 1) % 256;
        j = (j + s[i]) % 256;
        x = s[i];
        s[i] = s[j];
        s[j] = x;
        res += String.fromCharCode(str.charCodeAt(y) ^ s[(s[i] + s[j]) % 256]);
    }
    return res;
}

function rc4_er(string) {
    return bin2hex(rc4_fun(localStorage.key_code, string.toString()).toString());
}


function rc4_dr(string) {
    return rc4_fun(localStorage.key_code, hex2bin(string.toString())).toString();
}

//var str_val = rc4_er('83.33');
//alert(str_val);


//alert((rc4_er('euhe68vjdr1aX4F091c7aCggSMBf0A7M', hex2bin(str_val))));



function number_format(number, decimals, dec_point, thousands_sep) {
    //   example 1: number_format(1234.56);
    //   returns 1: '1,235'
    //   example 2: number_format(1234.56, 2, ',', ' ');
    //   returns 2: '1 234,56'
    //   example 3: number_format(1234.5678, 2, '.', '');
    //   returns 3: '1234.57'
    //   example 4: number_format(67, 2, ',', '.');
    //   returns 4: '67,00'
    //   example 5: number_format(1000);
    //   returns 5: '1,000'
    //   example 6: number_format(67.311, 2);
    //   returns 6: '67.31'
    //   example 7: number_format(1000.55, 1);
    //   returns 7: '1,000.6'
    //   example 8: number_format(67000, 5, ',', '.');
    //   returns 8: '67.000,00000'
    //   example 9: number_format(0.9, 0);
    //   returns 9: '1'
    //  example 10: number_format('1.20', 2);
    //  returns 10: '1.20'
    //  example 11: number_format('1.20', 4);
    //  returns 11: '1.2000'
    //  example 12: number_format('1.2000', 3);
    //  returns 12: '1.200'
    //  example 13: number_format('1 000,50', 2, '.', ' ');
    //  returns 13: '100 050.00'
    //  example 14: number_format(1e-8, 8, '.', '');
    //  returns 14: '0.00000001'

    number = (number + '')
            .replace(/[^0-9+\-Ee.]/g, '');
    var n = !isFinite(+number) ? 0 : +number,
            prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
            sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
            dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
            s = '',
            toFixedFix = function (n, prec) {
                var k = Math.pow(10, prec);
                return '' + (Math.round(n * k) / k)
                        .toFixed(prec);
            };
    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n))
            .split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '')
            .length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1)
                .join('0');
    }
    return s.join(dec);
}



/*function show_data() {
 
 var min_lot_id = [];
 var min_user_id = [];
 var dynamic_room = '';
 var dynamic_lot = [];
 //for status winner or LIVE
 $(".f_well_for_count").each(function () {
 var og_lot = $(this).attr('og_lot');
 dynamic_room = $(this).attr('dynamic_room');
 dynamic_lot.push($(this).attr('dynamic_lot'));
 var dynamic_min_user = $(this).attr('dynamic_min_user');
 var dynamic_r_price = $(this).attr('dynamic_r_price');
 min_lot_id.push(og_lot);
 min_user_id.push(dynamic_min_user);
 });
 $.post(localStorage.host + '../classes/service_manage_auction.class.php?action=load_dynamic_auction_status&dn_r=' + dynamic_room + '&dn_l=' + min_lot_id + '&dn_min_user=' + min_user_id + '&user_id=' + localStorage.user_id + '&admin_id=' + localStorage.user_id, {id: min_lot_id},
 function (data) {
 var items = [];
 if (data) {
 $.each($.parseJSON(data), function (idx, obj) {
 //alert(obj.tender_period +"|"+dynamic_lot[idx]);
 $("#span_emd").html(obj.emd_left);
 localStorage.final_status = obj.status;
 //console.log(localStorage.final_status);
 if (obj.tender_period == 'No') {
 if ($('.timer').html() != localStorage.auction_expired__)
 $('.bid_cal_' + dynamic_lot[idx]).html(obj.status).show();
 $('.curr_bid_' + dynamic_lot[idx]).text(obj.curr_bid);
 $('.my_bid_' + dynamic_lot[idx]).text(obj.my_bid);
 if (obj.discount_value < 0)
 {
 $('.curr_per_bid_' + dynamic_lot[idx]).text(Math.abs(obj.discount_value));
 $('.curr_discount').html('Premium');
 } else {
 $('.curr_per_bid_' + dynamic_lot[idx]).text(Math.abs(obj.discount_value));
 }
 $('.my_per_bid_' + dynamic_lot[idx]).text(obj.user_per);
 $('.total_bid_' + dynamic_lot[idx]).text(obj.total_bid);
 } else if (obj.tender_period == 'Yes') {
 $('.withdraw-sml-dis').addClass('hide');
 }
 });
 }
 });
 }*/


localStorage.my_bid_val = '';

function show_data(auc_type_id, reserve_price, lot_id, auction_on, min_incr_value, discount_value, actual_price,unit_price,unit_price_auction) {
    
    var curr_value_dropdown = '';
    localStorage.tender_local_var = 'N';
    var min_lot_id = [];
    var min_user_id = [];
    var dynamic_room = '';
    var dynamic_lot = [];
    //for status winner or LIVE
    $(".f_well_for_count").each(function () {

        var og_lot = $(this).attr('og_lot');
        dynamic_room = $(this).attr('dynamic_room');
        dynamic_lot.push($(this).attr('dynamic_lot'));
        var dynamic_min_user = $(this).attr('og_dynamic_min_user');
        var dynamic_r_price = $(this).attr('dynamic_r_price');
        min_lot_id.push(og_lot);
        min_user_id.push(dynamic_min_user);
    });
    //http://192.168.0.13/classes/service_manage_auction.class.php?action=load_dynamic_auction_status&dn_r=d7&dn_l=4&dn_min_user=1&user_id=d3&admin_id=d3

    $.post(localStorage.host + '../classes/service_manage_auction.class.php?action=load_dynamic_auction_status&dn_r=' + dynamic_room + '&dn_l=' + min_lot_id + '&dn_min_user=' + min_user_id + '&user_id=' + localStorage.user_id + '&admin_id=' + localStorage.user_id, {id: min_lot_id},
    function (data) {
        var items = [];
        if (data) {
            $.each($.parseJSON(data), function (idx, obj) {
                //alert(obj.emd_left +"|"+obj.my_bid);
                var limit_emd=localStorage.limit_val;
                var emd_left_tmp=(obj.emd_left/limit_emd);
                $(".span_emd").html(numberWithCommas(round(emd_left_tmp)));
                $(".span_emd").html(obj.emd_left);
                localStorage.final_status = obj.status;
                $('.head-value-text-cp').html($('.curr_bid_' + dynamic_lot[idx]).text());
                if (auc_type_id != localStorage.closed_bid_auction) {
                    $('.head-value-text-cp').html($('.curr_bid_' + dynamic_lot[idx]).text());
                    $('.head-per-value-text').html('<i class="fa fa-inr"></i> '+numberWithCommas(RoundTo($('.curr_bid_' + dynamic_lot[idx]).text().replace(/,/g, '') / unit_price ,0.5  )));
                    $('#cal_span_per_nit').html(numberWithCommas(RoundTo($('.curr_bid_' + dynamic_lot[idx]).text().replace(/,/g, '')/unit_price, 0.5 )));
                } else {
                    if($('.aut-type-1').text() == localStorage.bid_now) {
                        $('.head-value-text-cp').html('~');
                    }
                    $('.head-per-value-text').html('~');
                    $('#cal_span_per_nit').html('~');
                }
                if (obj.tender_period == 'No') {
                    localStorage.tender_local_var = 'N';
                    localStorage.tender_period = 'No';
                    $('.tender-period').hide();
                    $('#not_for_closed_bid').show();
                    $('.assorted_hide').show();
                    $('.buy-now-panel').show();
                    $('#div_no_tendor').removeClass('hide');
                    $('.div_tendor').addClass('hide');
                    $('.total_bids_li').removeClass('hide');
                    $('.view_history_li').removeClass('hide');
                    $('.span_time_left').html(localStorage.time_left__);
                    if($('.bid_cal_' + dynamic_lot).text() == localStorage.won__+localStorage.won__) {                    
                     //   console.log($('.bid_cal_' + dynamic_lot).text());
                        $('.aut-type-1').html('Pay Now');
                        $('.aut-type-1').show();
                        $('.aut-type-2').hide();
                        
                    } else if($('.bid_cal_' + dynamic_lot).text() == localStorage.sold_out_+localStorage.sold_out_) {
                        $('.aut-type-1').html('Sold Out');
                        $('.aut-type-1').show();
                        $('.aut-type-2').hide();
                    } else if($('.msg_' + dynamic_lot).text() == localStorage.buy_now_admin_approval) {
                        $('.aut-type-1').html('Admin Approval');
                    } else {
                        $('.aut-type-1').html(localStorage.bid_now);
                        //console.log($('.cal_bid_cal_'+dynamic_lot).text());
                        if($('.cal_bid_cal_'+dynamic_lot).text() != '--') {
                            $('.mybidvalue').css('visibility','visible');
                        } else {
                            //$('.mybidvalue').fadeOut();
                             $('.mybidvalue').css('visibility','hidden');
                        }
                    }
                    
                    $('.bid_now_button').removeAttr("disabled","true");
                    if (auc_type_id != localStorage.closed_bid_auction) {
                        if ($('.timer').html() != localStorage.auction_expired__)
                            $('.bid_cal_' + dynamic_lot[idx]).html(obj.status).show();
                        $('#withdraw_' + dynamic_lot[idx]).removeClass('hide');
                        $('.auto_bid').removeClass('hide');
                    }
                    
                    /**********/
                    if (auc_type_id == localStorage.closed_bid_auction) {
                        $('.current-price').hide();
                        $('.bidvalue').hide();
                        $('.auto_bid_button').hide();
                        if (parseFloat(obj.curr_bid.replace(/,/g, '')) >= localStorage.ass_auc_buy_now_price){
                            $('.assorted_hide').hide();
                        }else{
                            $('.assorted_hide').show();
                        }
                        if (parseFloat($('.my_bid_' + dynamic_lot[idx]).text().replace(/,/g, '')) > 0) {
                            $('.bid_now_button').val(localStorage.increase_bid__);
                        }                       
                    }
                    /**********/
//console.log(obj.total_bid );
                    if (obj.total_bid != 0) {
                        if (auction_on == 'price') {
                            $('.curr_per_bid_' + dynamic_lot[idx]).text(Math.abs(round(obj.discount_value, 2)));
                        } else {
                            $('.curr_per_bid_' + dynamic_lot[idx]).text(Math.abs(obj.discount_value));
                        }
                        // $('.curr_per_bid_' + dynamic_lot[idx]).text(Math.abs(obj.discount_value));
                        $('.curr_bid_' + dynamic_lot[idx]).text(obj.curr_bid);
                        //$('.dup_curr_bid_'+dynamic_lot[idx]).text(obj.curr_bid);

                        if ($('.curr_bid_' + lot_id + '').text() != curr_value_dropdown)
                        {
                            if (auc_type_id != localStorage.closed_bid_auction) {
                                $.post(localStorage.host + '../classes/common.class.php?action=load_dynamic_drop_down_mobile&curr_val=' + $('.curr_bid_' + lot_id + '').text() + '&min_inc=' + min_incr_value + '&actual_p=' + actual_price + '&auc_on=' + auction_on + '&user_id=' + localStorage.userid+'&total_bid='+obj.total_bid+'&unit_price_auction='+unit_price_auction+'&unit_price='+unit_price, {id: 1},
                                function (data) {
                                    var items = [];

                                    if (data && !$("#dd_" + lot_id).is(':focus')) {

                                        //alert($('.curr_bid_'+lot_id+'').text() +"|"+curr_value_dropdown +"|"+data);
                                        curr_value_dropdown = $('.curr_bid_' + lot_id + '').text();
                                        $("select[id='dd_" + lot_id+"']").empty().append('<option value="Bid"> Bid </option>');
                                        $("select[id='dd_" + lot_id+"']").append(data);

                                        //console.log(data);
                                        //  var dd = new DropDown($('#dd_' + lot_id + ''));
                                        // dd.initEvents();
                                        //dropdown_obj.initEvents();
                                    }
                                });
                            }
                        }

                    } else {
                        if (discount_value != curr_value_dropdown) {
                        //    if (auc_type_id != localStorage.closed_bid_auction) {
                                $.post(localStorage.host + '../classes/common.class.php?action=load_dynamic_drop_down_mobile&curr_val=' + discount_value + '&min_inc=' + min_incr_value + '&actual_p=' + actual_price + '&auc_on=' + auction_on + '&user_id=' + localStorage.userid+'&total_bid='+obj.total_bid+'&unit_price_auction='+unit_price_auction+'&unit_price='+unit_price, {id: 1},
                                function (data) {
                                    var items = [];
                                    if (data && !$("#dd_" + lot_id).is(':focus')) {
                                        curr_value_dropdown = discount_value;
                                        $("select[id='dd_" + lot_id+"']").empty().append('<option value="Bid"> Bid </option>');
                                        $("select[id='dd_" + lot_id+"']").append(data);
                                        // var dd = new DropDown($('#dd_' + lot_id + ''));
                                        // dd.initEvents();
                                        //dropdown_obj.initEvents();
                                    }
                                });
                           // }
                        }
                    }
                    if (obj.my_bid != 0)
                        $('.cal_bid_cal_' + dynamic_lot[idx]).html(obj.my_bid);

                    if (parseFloat(obj.total_auto_bid.replace(/,/g, '')) > 0 && obj.total_auto_bid != '' && parseFloat(obj.curr_bid.replace(/,/g, '')) <= parseFloat(obj.total_auto_bid.replace(/,/g, ''))) {
                        $('#div_auto_bid_active').removeClass('hide');
                        $('#div_auto_bid_active_value').html(obj.total_auto_bid);
                    } else {
                        $('#div_auto_bid_active').addClass('hide');
                    }
                    $('.my_bid_' + dynamic_lot[idx]).text(obj.my_bid);
                    if (auc_type_id == localStorage.closed_bid_auction) {
                        if (parseFloat(obj.curr_bid.replace(/,/g, '')) >= parseFloat(localStorage.ass_auc_buy_now_price) && $('.my_bid_' + dynamic_lot[idx]).text().replace(/,/g, '') >= parseFloat(localStorage.ass_auc_buy_now_price)){
                            $('.assorted_hide').hide();
                            if ($('#clock_').html() != localStorage.auction_expired__ ){
                                $('.bid_cal_' + dynamic_lot[idx]).html(obj.status).show();
                            }
                            $('#withdraw_' + dynamic_lot[idx]).removeClass('hide');
                        } else {
                            $('.assorted_hide').show();
                            $('#withdraw_' + dynamic_lot[idx]).addClass('hide');
                        }
                        if (parseFloat($('.my_bid_' + dynamic_lot[idx]).text().replace(/,/g, '')) > 0) {
                            $('#bid_now_button_' + dynamic_lot[idx]).val(localStorage.increase_bid__ );
                        }
                    } 
                    //alert(obj.my_bid);                    
                    //if(parseFloat(obj.curr_bid) > parseFloat(obj.total_auto_bid) && $('.bid_cal_'+dynamic_lot[idx]).html()!=localStorage.winner__ )
                    //$('.auto_bid_cal_'+dynamic_lot[idx]).html("<?php echo auto_bid_out_error ?>");

                    if (auc_type_id == localStorage.assorted_auction) {
                        //alert(parseFloat(obj.curr_bid.replace(/,/g,'')) +"|"+ <?php echo reserve_price ?>);
                        if (parseFloat(obj.curr_bid.replace(/,/g, '')) >= parseFloat(localStorage.ass_auc_buy_now_price) )
                        {
                            $('.assorted_hide').hide();
                            $('.buy-now-panel').hide();
                            $('.footer-2').hide();
                            $('.bid_now').show();
                            $('.col-4').show();
                            $('.col-3').hide();
                        }
                    }
                    localStorage.my_bid_val = obj.my_bid.replace(/,/g, '');
                    if (auc_type_id == localStorage.assorted_auction) {
                        if (parseFloat(obj.curr_bid.replace(/,/g, '')) >= parseFloat(localStorage.ass_auc_buy_now_price)){
                            $('.assorted_hide').hide();
                            $('.buy-now-panel').addClass('hide'); 
                        }else if($('#clock_').text() != localStorage.auction_expired__ && $('#clock_').text()!=''){
                            $('.assorted_hide').show();
                            $('.buy-now-panel').removeClass('hide');
                        }
                    }
                    
                    if (obj.discount_value < 0) {
                        $('.curr_per_bid_' + dynamic_lot[idx]).text(Math.abs(obj.discount_value));
                        $('.curr_discount').html('Premium: ');
                    } else {

                    }
                    $('.my_per_bid_' + dynamic_lot[idx]).text(obj.user_per);
                    $('.total_bid_' + dynamic_lot[idx]).text(obj.total_bid);
                } else if (obj.tender_period == 'Yes') {
                    localStorage.tender_local_var = 'Y';
                    localStorage.tender_period = 'Yes';
                    $('.callout').hide();
                    $('.withdraw-sml-dis').addClass('hide');
                    //$('#not_for_closed_bid').hide();
                    $('.assorted_hide').hide();
                    $('.buy-now-panel').hide();
                    $('.auto_bid').addClass('hide');
                    $('#withdraw_' + dynamic_lot[idx]).addClass('hide');
                    $('.auctions-status-text').show();
                    $('.auctions-status-text').html(localStorage.presale);
                    $('#div_no_tendor').addClass('hide');
                    $('.div_tendor').removeClass('hide');
                    $('.span_time_left').html(localStorage.presale_time_left);
                }
            });
        }
    });    
}

function insert_update_emd_temp_table(lot_id, room_id) {
    $.ajax({url: localStorage.host + '../classes/service_manage_auction.class.php?action=insert_update_emd_temp_table&l_=' + lot_id + '&r_=' + room_id + '&u_=' + localStorage.user_id, data: {}, type: 'get', success: function (data) {
            var emd_details = JSON.parse(data);
            console.log(emd_details);
            console.log('asd');

        },
        error: function (jqXHR, textStatus, errorThrown) {
            /*  if (textStatus === "timeout") {
             x_alert("You seem to have lost internet connection, please reconnect to get going"); window.location.href = "no_connection.html";
             }*/
        }
    });
}



/*function show_time() {
 var min_lot_id = [];
 var min_user_id = [];
 var dynamic_room = '';
 var dynamic_lot = [];
 //for status winner or LIVE
 $(".f_well_for_count").each(function () {
 var og_lot = $(this).attr('og_lot');
 dynamic_room = $(this).attr('dynamic_room');
 dynamic_lot.push($(this).attr('dynamic_lot'));
 var dynamic_min_user = $(this).attr('dynamic_min_user');
 var dynamic_r_price = $(this).attr('dynamic_r_price');
 min_lot_id.push(og_lot);
 min_user_id.push(dynamic_min_user);
 });
 var golden_time = $('#dd_' + dynamic_lot).attr('golden_time');
 var golden_time_value = $('#dd_' + dynamic_lot).attr('golden_time_value');
 
 //for dynamic update auction time
 $.post(localStorage.host + '../classes/service_manage_auction.class.php?action=load_dynamic_end_date&dn_r=' + dynamic_room + '&dn_l=' + dynamic_lot + '&golden_time=' + golden_time + '&golden_time_value=' + golden_time_value + '&user_id=' + localStorage.user_id + '&admin_id=' + localStorage.user_id, {id: min_lot_id},
 function (data) {
 var items = [];
 if (data) {
 $.each($.parseJSON(data), function (idx, obj) {
 if (dynamic_lot == obj.dynamic_lot) { //alert(obj.countdown_date + "|" + obj.dynamic_lot); 
 $('#dd_' + dynamic_lot).attr('golden_time', obj.golden_time);
 // console.log(obj.countdown_date);
 var tempday = obj.countdown_date.split('<ul><li><h2>');
 var tempday1 = tempday[1].split(' </h2>');
 // console.log(tempday1);
 if (tempday1[0] == '0') {
 var temphr = tempday1[1].split('</li><li><h2>');
 //var tempday1 = tempday[1].split(' </h2>');
 if (temphr[1] != '0') {
 $('.timer').html(temphr[1] + ' Hours');
 } else {
 var tempmin = tempday1[2].split('</li><li><h2>');
 if (tempmin[1] != '0') {
 $('.timer').html(tempmin[1] + ' Minutes');
 } else {
 var tempsec = tempday1[3].split('</li><li><h2>');
 $('.timer').html(tempsec[1] + ' Seconds');
 }
 }
 } else {
 $('.timer').html(tempday1[0] + ' Days');
 }
 
 if (obj.countdown_date == 'F') {
 $('.timer').html(localStorage.auction_expired__);
 $('.bid_cal_' + dynamic_lot).text(localStorage.sold__);
 $('.auto_bid').hide();
 $('#bid_now_button_' + dynamic_lot).addClass('hide');
 //$('#autobid_<?php //echo $enc_dec->encrypt_num($row->{'lot_id'})?>').addClass('disabled');
 $('#withdraw_' + dynamic_lot).addClass('hide');
 $('#dd_' + dynamic_lot).addClass('hide');
 if (localStorage.final_status == localStorage.winner__) {
 $('.buy_' + dynamic_lot).removeClass('hide');
 }
 
 update_winner(dynamic_lot, dynamic_room, $('#dd_' + dynamic_lot).attr('reserve_price'));
 
 }
 
 }
 
 });
 }
 });
 
 }*/


function show_time(auc_type_id, reserve_price) {



    var min_lot_id = [];
    var min_user_id = [];
    var dynamic_room = '';
    var dynamic_lot = [];
    //for status winner or LIVE
    $(".f_well_for_count").each(function () {

        var og_lot = $(this).attr('og_lot');
        //alert(og_lot);
        dynamic_room = $(this).attr('dynamic_room');
        dynamic_lot.push($(this).attr('dynamic_lot'));
        var dynamic_min_user = $(this).attr('dynamic_min_user');
        var dynamic_r_price = $(this).attr('dynamic_r_price');
        min_lot_id.push(og_lot);
        min_user_id.push(dynamic_min_user);
    });
    var golden_time = $('#dd_' + dynamic_lot).attr('golden_time');
    var golden_time_value = $('#dd_' + dynamic_lot).attr('golden_time_value');

    //for dynamic update auction time
    $.post(localStorage.host + '../classes/service_manage_auction.class.php?action=load_dynamic_end_date&dn_r=' + dynamic_room + '&dn_l=' + dynamic_lot + '&golden_time=' + golden_time + '&golden_time_value=' + golden_time_value + '&user_id=' + localStorage.userid + '&admin_id=' + localStorage.userid, {id: min_lot_id},
    function (data) {
        var items = [];
        if (data) {
            $.each($.parseJSON(data), function (idx, obj) {
                if (dynamic_lot == obj.dynamic_lot) { //alert(obj.countdown_date + "|" + obj.dynamic_lot); 
                    $('#dd_' + dynamic_lot).attr('golden_time', obj.golden_time);
                    if (obj.countdown_date != 'F') {                       
                        var tempday = obj.countdown_date.split('<ul><li><h2>');
                        var tempday1 = tempday[1].split(' </h2>');
                        if (tempday1[0] == '0') {
                            var temphr = tempday1[1].split('</li><li><h2>');
                            if (temphr[1] != '0') {
                                $('.timer').html(temphr[1] + ' Hours');
                            } else {
                                var tempmin = tempday1[2].split('</li><li><h2>');
                                if (tempmin[1] != '0') {
                                    $('.timer').html(tempmin[1] + ' Minutes');
                                } else {
                                    var tempsec = tempday1[3].split('</li><li><h2>');
                                    $('.timer').html(tempsec[1] + ' Seconds');
                                }
                            }
                        } else {
                            $('.timer').html(tempday1[0] + ' Days');
                        }

                    }
                    if (obj.countdown_date == 'F') {
                        // }else {
                        $('.span_current_text').html('Final');
                        $('.timer').html(localStorage.auction_expired__);
                        $('.timer').addClass('x-red');
                        $('.clock-text').hide();
                        $('.auto_bid').hide();
                        $('#bid_now_button_' + dynamic_lot).addClass('hide');
                        //$('#autobid_<?php //echo $enc_dec->encrypt_num($row->{'lot_id'}) ?>').addClass('disabled');
                        $('#withdraw_' + dynamic_lot).addClass('hide');
                        $('#withdraw_' + dynamic_lot).hide();
                        $('#dd_' + dynamic_lot).addClass('hide');

                        if (localStorage.final_status == localStorage.winner__) {

                            if (auc_type_id == localStorage.closed_bid_auction) {

                                //console.log(parseFloat(localStorage.my_bid_val)+' < '+ parseFloat(localStorage.ass_auc_buy_now_price)+' && ' + localStorage.auction_assort_close_allow_buy +' == 0');
                                if (parseFloat(localStorage.my_bid_val) < parseFloat(localStorage.ass_auc_buy_now_price) && localStorage.auction_assort_close_allow_buy == 0) {
                                    $('.buy_' + dynamic_lot).addClass('hide');
                                    $('.msg_' + dynamic_lot).hide().html(localStorage.buy_now_admin_approval).fadeIn('slow');
                                    $('.bid_cal_' + dynamic_lot).text('');                                    
                                    $('.direct_buy_' + dynamic_lot).addClass('hide');
                                    $('.buy-now-panel').hide();
                                    $('.aut-type-2').hide();
                                    $('.aut-type-1').show();
                                    $('.aut-type-1').html('Admin Approval');
                                } else {
                                    $('.buy_' + dynamic_lot).removeClass('hide');
                                    $('.mybidvalue').css('visibility','hidden');
                                    $('.bid_cal_' + dynamic_lot).text(localStorage.won__);
                                    $('.aut-type-1').html('Pay Now');
                                    $('.bid_cal_' + dynamic_lot).css('padding-top', '10px');
                                    $('.msg_' + dynamic_lot).removeClass('hide');
                                }
                            } else {
                                $('.mybidvalue').css('visibility','hidden');
                                $('.bid_cal_' + dynamic_lot).css('padding-top', '10px');
                                $('.buy_' + dynamic_lot).removeClass('hide');
                                $('.bid_cal_' + dynamic_lot).text(localStorage.won__);
                                $('.aut-type-1').html('Pay Now');
                                $('#withdraw_' + dynamic_lot).addClass('hide');
                                $('.msg_' + dynamic_lot).removeClass('hide');
                            }
                            // $('.cal_bid_cal_' + dynamic_lot).html('');
                        } else if (localStorage.my_bid_val > 0) {
                            $('.bid_cal_' + dynamic_lot).text(localStorage.lost__);
                            $('.direct_buy_' + dynamic_lot).addClass('hide');
                            //$('.aut-type-1').html(localStorage.lost__);
                            $('#withdraw_' + dynamic_lot).addClass('hide');
                        } else {
                            $('.bid_cal_' + dynamic_lot).html(localStorage.sold_out_);
                            $('.direct_buy_' + dynamic_lot).addClass('hide');
                            $('#withdraw_' + dynamic_lot).addClass('hide');
                            $('.aut-type-1').html('Sold Out');
                        }
                        update_winner(dynamic_lot, dynamic_room, $('#dd_' + dynamic_lot).attr('reserve_price'));
                    } else {
                        if($('.total_bid_' + dynamic_lot).text() != 0){
                            $('.span_current_text').html('Current');
                        }
                    }                    
                }
            });
        }
    });
}

function update_winner(lot_id, room_id, r_price) {
    var data = new FormData();
    $.ajax({
        url: localStorage.host + '../classes/service_manage_auction.class.php?action=save_auction_winner_details&lot_id=' + lot_id + '&room_id=' + room_id + '&r_price=' + r_price + '',
        type: 'POST',
        data: data,
        cache: false,
        dataType: 'json',
        processData: false, // Don't process the files
        contentType: false, // Set content type to false as jQuery will tell the server its a query string request
        success: function (data, textStatus, jqXHR)
        {

        },
        error: function (jqXHR, textStatus, errorThrown)
        {
            //$('.loader').html(textStatus);

        }
    });
}






function round(value, exp) {
    if (typeof exp === 'undefined' || +exp === 0)
        return Math.round(value);
    value = +value;
    exp = +exp;
    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0))
        return 'NaN';
    // Shift
    value = value.toString().split('e');
    value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp)));
    // Shift back
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp));
}

function menu_close() {
    $('html').removeClass('mm-background');
    $('html').removeClass('mm-opened');
    $('html').removeClass('mm-opening');
    $('#menu-left').removeClass('mm-current');
    $('#menu-left').removeClass('mm-opened');
}
function redirect(location, hash) {
    if (typeof hash === 'undefined') {
        hash = '';
    } else {
        hash = '#' + hash;
    }
    if (window.location.href.indexOf("dashboard") > -1) // This doesn't work, any suggestions?
    {
        if (location == 'dashboard' && hash == '#watchlist') {
            menu_close();
            $('.watchlist').click();
        } else if (location == 'dashboard' && hash == '#notification') {
            menu_close();
            $('.notification').click();
        } else if (location == 'dashboard' && hash == '#active-auction') {
            menu_close();
            $('.active-auction').click();
        } else {
            window.location.href = location + ".html" + hash;
        }
    } else {
        window.location.href = location + ".html" + hash;
    }
}


function add_menu(active) {
    var dashboard = '';
    var home = '';
    var calendar = '';
    var room = '';
    var show_less = '';
    var show_less = '';
    var show_profile = '';
    if (active == 'dashboard') {
        dashboard = 'menu-item-active';
    } else if (active == 'home') {
        home = 'menu-item-active';
    } else if (active == 'calendar') {
        calendar = 'menu-item-active';
    } else if (active == 'room') {
        room = 'menu-item-active';
    } else if (typeof active == 'undefined') {
        show_less = 'hidden';
        if (localStorage.verified == '1') {
            show_less = '';
        }



    }
    if (localStorage.logged_in == '0' || typeof localStorage.logged_in === 'undefined') {
        show_profile = 'hidden';
    }
    //  alert(show_profile);
    //user_info ();
    if (localStorage.getItem("company_name") == null || localStorage.getItem("company_address") == null || localStorage.getItem("name") == null) {
        $.ajax({url: localStorage.host + '../classes/buyer_dashboard.class.php', data: {action: 'buyer_detail_mobile', user_id: localStorage.user_id}, type: 'get', success: function (data) {
                var detail = JSON.parse(data);
                //console.log(detail);
                localStorage.name = detail.user_detail['name'];
                localStorage.company_name = detail.user_detail['company_name'];
                localStorage.company_address = detail.user_detail['company_address'];
                localStorage.email = detail.user_detail['email'];
                localStorage.mobile_no = detail.user_detail['mobile_no'];
                localStorage.profile_pic = detail.user_detail['profile_pic'];
                localStorage.cover_pic_path = detail.user_detail['cover_pic_path'];
                localStorage.notification = detail['notification'];
                localStorage.wishlist_auction_table = detail['wishlist_auction_table'];
                localStorage.buyer_rating_count = detail.buyer_rating['count'];
                localStorage.buyer_rating_text = detail.buyer_rating['text'];
                //localStorage.user_id = rc4_er(detail.user_detail['id']);
                menu_body(home, dashboard, calendar, show_less, show_profile,room);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                /* if (textStatus === "timeout" || textStatus === 'error') {
                 x_alert("You seem to have lost internet connection, please reconnect to get going"); window.location.href = "no_connection.html";
                 }*/
            }
        });
    } else {
        menu_body(home, dashboard, calendar, show_less, show_profile,room);
    }
}

function user_info() {
    $.ajax({url: localStorage.host + '../classes/buyer_dashboard.class.php', data: {action: 'buyer_detail_mobile', user_id: localStorage.user_id}, type: 'get', success: function (data) {
            var detail = JSON.parse(data);
            //console.log(detail);
            localStorage.name = detail.user_detail['name'];
            localStorage.company_name = detail.user_detail['company_name'];
            localStorage.company_address = detail.user_detail['company_address'];
            localStorage.email = detail.user_detail['email'];
            localStorage.mobile_no = detail.user_detail['mobile_no'];
            localStorage.profile_pic = detail.user_detail['profile_pic'];
            localStorage.cover_pic_path = detail.user_detail['cover_pic_path'];
            localStorage.notification = detail['notification'];
            localStorage.wishlist_auction_table = detail['wishlist_auction_table'];
            localStorage.buyer_rating_count = detail.buyer_rating['count'];
            localStorage.buyer_rating_text = detail.buyer_rating['text'];
            //localStorage.user_id = rc4_er(detail.user_detail['id']);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            /*  if (textStatus === "timeout") {
             x_alert("You seem to have lost internet connection, please reconnect to get going"); window.location.href = "no_connection.html";
             }*/
        }
    });
}

function menu_body(home, dashboard, calendar, show_less, show_profile,room) {
    if (localStorage.name == 'null' && show_profile == '' || localStorage.company_name == '' && show_profile == '') {
        var info = setInterval(function () {
            user_info();
           // console.log(localStorage.name + '   ' + show_profile);
            if (localStorage.name != null) {
                clearInterval(info);
            }
            // alert(localStorage.logged_in );
            menu_body(home, dashboard, calendar, show_less, show_profile,room);
        }, 500);
    }

    var signup = '';
    var xstok = '';
    if (show_profile == 'hidden') {
        signup = '<div class=" row  menu-item" onclick="redirect(\'signin\')"><i class="fa fa-sign-in"></i> Sign in </div>';
        xstok = '<div class="row row-cancel-margin profile-main" style=" padding: 10px 10px 20px 10px;"><img src="images/logo_y.png"></div>';
    }
    user_info();
    var body = '<script type="text/javascript">$(function () { $(\'nav#menu-left\').mmenu();});</script><div id="header"><a href="#menu-left"><i class="fa fa-bars fa-lg x-white"></i></a></div> <nav id="menu-left" class=""><div class="menu-block">' + xstok + ' <div class="row row-cancel-margin profile-main ' + show_profile + '"><div class="profile-details">  <div class="profile-image"><img src="' + localStorage.profile_pic + '" class="img-circle profile-image-img" alt="Profile Picture" width="304" height="236"> </div>  <div class="profile-name" onclick="user_profile()">' + localStorage.name + '</div><div class="profile-location xs-grey"><i class="fa fa-building"></i> ' + localStorage.company_name + '</div></div><div class="emd_bid_limt">  <div class="' + show_less + ' emd-name xs-grey padding-tb-10">EMD balance : <span class="font-family-helvetica-bold emd-text" style="display: inline-block;"><i class="fa fa-inr"></i> <span class="emd-bal">-</span></span></div>  <div class="' + show_less + ' bid-limt-name xs-grey padding-tb-10 hide">Bid Limit<br><span class="font-family-helvetica-bold bid-limt-text"><i class="fa fa-inr" style="display: inline-block;"></i> <span class="bid-limit">-</span></span></div></div></div> <div class="' + show_less + ' row  menu-item menu-item-first-child ' + home + '" onclick="redirect(\'search_cat\')"><i class="fa fa-university"></i> Home </div> <div class="' + show_less + ' row  menu-item  ' + show_profile + '" onclick="all_auctions()"><i class="fa fa-globe"></i> Ongoing Auctions </div> <div class="' + show_less + ' row  menu-item  ' + show_profile + ' '+room+'" onclick="all_room()"><i class="fa fa-flag"></i> All Rooms </div> <div class="' + show_less + ' row  menu-item ' + dashboard + ' ' + show_profile + '" onclick="redirect(\'dashboard\',\'active-auc\')"><i class="fa fa-paper-plane-o"></i> Dashboard </div> <div class="' + show_less + ' row  menu-item ' + calendar + ' ' + show_profile + '" onclick="redirect(\'calendar\')"><i class="fa fa-calendar-o"></i></i> Calendar </div> <div class="' + show_less + ' ' + show_profile + ' row  menu-item" onclick="redirect(\'dashboard\',\'watchlist\')"><i class="fa fa-heart-o"></i> Watchlist <span class="wishlist-count">' + localStorage.wishlist_auction_table + '</span></div><div class=" ' + show_less + ' ' + show_profile + ' row  menu-item" onclick="redirect(\'dashboard\',\'notification\')"><i class="fa fa-bell-o"></i> Notifications <span class="notication-count">' + localStorage.notification + '</span></div><div style="padding: 1px;" class="' + show_less + ' row x-orange-background"></div><div class="' + show_less + ' ' + show_profile + ' row  menu-item hide" onclick="redirect(\'dashboard\')"><i class="fa fa-question-circle"></i> How it works? </div> <div class="row  menu-item" onclick="redirect(\'our_story\')"><i class="fa fa-book"></i> Our Story </div> <div class="row  menu-item" onclick="redirect(\'buyer_protection\')"><i class="fa fa-shield"></i> Buyer Protection </div> <div class="row  menu-item hide" onclick="redirect(\'coming_soon_auctions\')"><i class="fa fa-gavel"></i> Coming Soon Auctions </div> <div class="row  menu-item" onclick="redirect(\'work_with_us\')"><i class="fa fa-briefcase"></i> Work With Us </div> <div class="row  menu-item" onclick="redirect(\'contact\')"><i class="fa fa-phone"></i> Contact Us </div><div style="padding: 1px;" class="row x-orange-background"></div><div class="' + show_profile + ' row  menu-item" onclick="redirect(\'change_password\')"><i class="fa fa-key"></i> Change Password </div> <div class="' + show_profile + ' row  menu-item" onclick="redirect(\'logout\')"><i class="fa fa-power-off"></i> Sign Out </div>  ' + signup + '</div> </nav>';
    $('#page').html(body);
    if(localStorage.wishlist_auction_table == '0') {
        $('.wishlist-count').hide();
    }
    if(localStorage.notification == '0') {
        $('.notication-count').hide();
    }
}

function user_profile() {
     window.location.href = "kyc_c.html";
}

function all_auctions() {
    localStorage.search_category = '';
    localStorage.search_category_name = 'All Category';
    localStorage.search_table_name = '';
    window.location.href = "search_result.html";
}

function all_room() {
    window.location.href = "all_room.html";
}


Date.daysBetween = function (date2, date1) {
    //Get 1 day in milliseconds
    var one_day = 1000 * 60 * 60 * 24;
    // Convert both dates to milliseconds
    var date1_ms = date1.getTime();
    var date2_ms = date2.getTime();
    // Calculate the difference in milliseconds
    var difference_ms = date2_ms - date1_ms;
    // Convert back to days and return
    return Math.round(difference_ms / one_day);
}

function showWithdrawDialog(room_id, lot_id, user_id, admin_id) {

    if ($('.bid_cal_' + lot_id).html() == localStorage.winner__ || $('.bid_cal_' + lot_id).html() == localStorage.bid_winner__) {
        // $('.msg_' + lot_id).empty().html(localStorage.withdraw_winner_msg__);
        $('.msg_' + lot_id).css('padding', '15px 1px');
        $('.msg_' + lot_id).empty().html(localStorage.withdraw_winner_msg__).delay(2000).fadeOut('slow').show();
        setTimeout(function () {
            $('.msg_' + lot_id).css('padding', '24px 1px');
        }, 2500);

    } else if (localStorage.my_bid_val.replace(/,/g, '') < 1) {
            $('.msg_' + lot_id).empty().html(localStorage.not_participating__ ).delay(3000).fadeOut('slow').show();
    } else {
        var buttonlabels = 'Confirm,Cancel';
        navigator.notification.confirm("Are you sure, you want to withdraw from this lot?", function(index) {
            if (index == 1) {
                $('.msg_' + lot_id).load(localStorage.host + '../classes/service_manage_auction.class.php?action=withdraw_lot&user_id=' + user_id + '&admin_id=' + admin_id + '&lot_id=' + lot_id + '&room_id=' + room_id + '').delay(2000).fadeOut('slow').show();
            } 
        },'Confirm Withdraw',buttonlabels);        
    }
}


function get_product_with_lot_name(lot_id) {
    $.ajax({url: localStorage.host + '../admin/classes/service_manage_product_planning.class.php', data: {action: 'get_product_with_lot_name', lot_name: lot_id}, type: 'get', success: function (data) {
            var bid = JSON.parse(data);
            console.log(bid);
            var table_body = "";
            for (var i = 0; i < bid.length; i++) {
                var image;
                if (bid[i]['image'].indexOf("|")) {
                    image = bid[i]['image'].split('|');
                    for (var j = 0; j < image.length; j++) {
                        var src = image[j];
                        if (image[j] == '') {
                            src = 'images/no_image.jpg';
                        }
                        $('.head-image').append('<div><img  alt="xstok" class="head-image-img" src="' + src + '"></div>');
                        localStorage.image_count = parseInt(localStorage.image_count) + 1;
                        localStorage.image_slide += '|'+src;
                    }                  
                    table_body += '<div class="product_detail_list"><div class="product_images"><img src=" ' +  image[0] + '" ></div><div class="product_details_text"><div class="product_titles_list"><b>Title</b> : '+ bid[i]['title'] +'</div><div class="product_quantity_list"><b>Quantity</b> : '+bid[i]['unit']+'</div><div class="product_price_list"><b>Price/<span class="unit"></span></b> : <i class="fa fa-inr"></i> '+ numberWithCommas(bid[i]['price']) +'</div><div class="product_condition_list"><b>Condition</b> : '+ bid[i]['condition']+'</div></div></div>';
                } else {
                    var src = bid[i]['image'];
                    if (image[j] == '') {
                        src = 'images/no_image.jpg';
                    }                    
                    table_body += '<div class="product_detail_list"><div class="product_images"><img src=" ' + src + '" ></div><div class="product_details_text"><div class="product_titles_list"><b>Title</b> : '+ bid[i]['title'] +'</div><div class="product_quality_list"><b>Quantity</b> : '+bid[i]['unit']+'</div><div class="product_price_list"><b>Price/<span class="unit"></span></b> : <i class="fa fa-inr"></i> '+ numberWithCommas(bid[i]['price']) +'</div><div class="product_condition_list"><b>Condition</b> : '+ bid[i]['condition']+'</div></div></div>';
                    
                    
                    $('.head-image').append('<div><img alt="xstok" class="head-image-img" src="' + bid[i]['image'] + '"></div>');                   
                    localStorage.image_slide += '|'+bid[i]['image'];
                    localStorage.image_count = parseInt(localStorage.image_count) + 1;
                }

                $('.image-count-value').html(localStorage.image_count);
            }
            setTimeout(function () {
                $('.single-item').slick({
//                    autoplay: true,
//                    autoplaySpeed: 2000,
                    arrows: false,
//                    fade: true,
                    dots: false
                });
            }, 1100);
            
            $('.product_details').html(table_body);
            $('.head-image-img').click(function () {
                var back = $(this).parent().prev().find('img').attr('src');
                $('#image').height($(window).outerHeight());
                $(".panzoom-elements").html('<img src="'+$(this).attr('src')+'">');
                $(".next_image").attr('onclick','next_image("'+$(this).attr('src')+'")');
                $(".back_image").attr('onclick','back_image("'+back+'")');
                $(".panzoom-elements").panzoom({
                    contain: 'invert'
//                    $reset: $('.image-close')
                   // maxScale: $(this).naturalWidth / $(this).clientWidth
                });
                $('.panzoom-elements').on("panzoomend", function( e, panzoom ) {
                    var array = panzoom.getMatrix(); 
                    if(array[0] <= 1 && array[3] <= 1 ) {
                        $('.panzoom-elements').css('transform','none');  
                         $(".panzoom-elements").on('swipeleft', function () {
                    $(".next_image").click();
                });
                $(".panzoom-elements").on('swiperight', function () {
                    $(".back_image").click();
                });
                    } else {
                        $(".panzoom-elements").unbind('swipeleft'); 
                        $(".panzoom-elements").unbind('swiperight'); 
                    }
                });
                $('.panzoom-elements').css('margin-top',($(window).height() - $('.panzoom-elements').height()) / 2);
                $('#image').css('visibility','visible');
                $('body').bind('touchmove', function (e) {
                    e.preventDefault();
                });
                $(".panzoom-elements").on('swipeleft', function () {
                    $(".next_image").click();
                });
                $(".panzoom-elements").on('swiperight', function () {
                    $(".back_image").click();
                });
            });
        },
        error: function (jqXHR, textStatus, errorThrown) {
            /* if (textStatus === "timeout") {
             x_alert("You seem to have lost internet connection, please reconnect to get going"); window.location.href = "no_connection.html";
             }*/
        }
    });
}

function next_image (src) {
    $('.panzoom-elements').panzoom("resetZoom");
    var list = localStorage.image_slide.split('|');    
    var place = list.indexOf(src);
    if(place >=0) {
        if(place <  (list.length - 1)) {                  
            $('.panzoom-elements').html("<img src='"+list[place+1]+"'>");
            $(".next_image").attr('onclick','next_image("'+list[place+1]+'")');
            return list[place+1]; 
        } else {            
            $('.panzoom-elements').html("<img src='"+list[0]+"'>");
            $(".next_image").attr('onclick','next_image("'+list[0]+'")');
            return list[0]; 
        }        
    }
}

function back_image (src) {
    $('.panzoom-elements').panzoom("resetZoom");
    var list = localStorage.image_slide.split('|');    
    var place = list.indexOf(src);
    if(place >=0) {
        console.log(place+' asdasd '+ (list.length - 1));
        if(place <  (list.length - 1)) {
            console.log(place);
            console.log(list);
            console.log(localStorage.image_slide);
            console.log('up'); 
            console.log(list[place+1]);             
            $('.panzoom-elements').html("<img src='"+list[place+1]+"'>");
            $(".back_image").attr('onclick','back_image("'+list[place+1]+'")');
            return list[place+1]; 
        } else {
            console.log(place);
            console.log(localStorage.image_slide);
            console.log('down'); 
            console.log(list[0]); 
            $('.panzoom-elements').html("<img src='"+list[0]+"'>");
            $(".back_image").attr('onclick','back_image("'+list[0]+'")');
            return list[0]; 
        }        
    }
}

function heart(lot_id, room_id, auc_type_id) {
    $.ajax({
        type: "POST",
        url: localStorage.host + '../classes/service_manage_auction.class.php?action=save_wishlist_details',
        data: {l_: lot_id, r_: room_id, u_: localStorage.user_id, au_: auc_type_id},
        success: function (data) {
            if (data == 'success') {
                $('#heart' + lot_id + room_id).html('<i class="fa fa-heart x-red"></i>');
            } else {
                $('#heart' + lot_id + room_id).html('<i class="fa fa-heart"></i>');
            }
        }
    });
}

function get_packege_detail(lot_id, room_id) {
    $.ajax({url: localStorage.host + '../classes/service_manage_auction.class.php', data: {action: 'get_packege_detail', l_: lot_id, r_: room_id}, type: 'get', success: function (data) {
            var bid = JSON.parse(data);
           // var table_body = '<div class="row row-cancel-margin"><div class="col-xs-6"><span class="font-family-helvetica-bold">Gross Weight</span></div><div class="col-xs-6">' + bid[0]['gross_weight'] + '</div></div><div class="row row-cancel-margin"><div class="col-xs-6"><span class="font-family-helvetica-bold">Net Weight</span></div><div class="col-xs-6">' + bid[0]['net_weight'] + '</div></div><div class="row row-cancel-margin"><div class="col-xs-6"><span class="font-family-helvetica-bold">No Carton</span></div><div class="col-xs-6">' + bid[0]['no_carton'] + '</div></div><div class="row row-cancel-margin"><div class="col-xs-6"><span class="font-family-helvetica-bold">Location</span></div><div class="col-xs-6">' + bid[0]['location'] + '</div></div></div>';
           var gw = 'hide';
           if(bid[0]['gross_weight'] != '') {
               gw  = '';
           }
           var nw = 'hide';
           if(bid[0]['net_weight'] != '') {
               nw  = '';
           }
           var nc = 'hide';
           if(bid[0]['no_carton'] != '') {
               nc  = '';
           }
           var l = 'hide';
           if(bid[0]['location'] != '') {
               l  = '';
           }
            var table_body = '<div class="row row-cancel-margin"><div class="col-xs-4 '+gw+'"><span class="font-family-helvetica-bold">Gross Weight</span></div><div class="col-xs-2 '+gw+'">' + bid[0]['gross_weight'] + '</div><div class="col-xs-4 '+nw+'"><span class="font-family-helvetica-bold">Net Weight</span></div><div class="col-xs-2 '+nw+'">' + bid[0]['net_weight'] + '</div></div><div class="row row-cancel-margin"><div class="col-xs-4 '+nc+'"><span class="font-family-helvetica-bold">No Carton</span></div><div class="col-xs-2 '+nc+'">' + bid[0]['no_carton'] + '</div><div class="col-xs-4 '+l+'"><span class="font-family-helvetica-bold">Location</span></div><div class="col-xs-2 '+l+'">' + bid[0]['location'] + '</div></div></div>';
            $('.shipping').append(table_body);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            /*  if (textStatus === "timeout") {
             x_alert("You seem to have lost internet connection, please reconnect to get going"); window.location.href = "no_connection.html";
             }*/
        }
    });
}

function supplier_detail(id) {

    $.ajax({url: localStorage.host + '../classes/supplier_dashboard.class.php', data: {action: 'dashboard', supplier_id: id, type: 'webservice'}, type: 'get', success: function (info) {
            var sup_detail = JSON.parse(info);
            // console.log(sup_detail);
            $('.supplier-name').html(sup_detail['user_detail']['company_name']);
            $('.rating-text').html(sup_detail['supplier_rating']['text']);
            var star = "";
            if (sup_detail['supplier_rating']['count'] == 0) {
                star = '<span class="rating-1"><i class="fa fa-star-o"></i></span> <span class="rating-2"><i class="fa fa-star-o"></i></span> <span class="rating-3"><i class="fa fa-star-o"></i></span> <span class="rating-4"><i class="fa fa-star-o"></i></span> <span class="rating-5"><i class="fa fa-star-o"></i></span>';
            } else if (sup_detail['supplier_rating']['count'] == 0.5) {
                star = '<span class="rating-1"><i class="fa fa-star-half-o"></i></span> <span class="rating-2"><i class="fa fa-star-o"></i></span> <span class="rating-3"><i class="fa fa-star-o"></i></span> <span class="rating-4"><i class="fa fa-star-o"></i></span> <span class="rating-5"><i class="fa fa-star-o"></i></span>';
            } else if (sup_detail['supplier_rating']['count'] == 1) {
                star = '<span class="rating-1"><i class="fa fa-star"></i></span> <span class="rating-2"><i class="fa fa-star-o"></i></span> <span class="rating-3"><i class="fa fa-star-o"></i></span> <span class="rating-4"><i class="fa fa-star-o"></i></span> <span class="rating-5"><i class="fa fa-star-o"></i></span>';
            } else if (sup_detail['supplier_rating']['count'] == 1.5) {
                star = '<span class="rating-1"><i class="fa fa-star"></i></span> <span class="rating-2"><i class="fa fa-star-half-o"></i></span> <span class="rating-3"><i class="fa fa-star-o"></i></span> <span class="rating-4"><i class="fa fa-star-o"></i></span> <span class="rating-5"><i class="fa fa-star-o"></i></span>';
            } else if (sup_detail['supplier_rating']['count'] == 2) {
                star = '<span class="rating-1"><i class="fa fa-star"></i></span> <span class="rating-2"><i class="fa fa-star"></i></span> <span class="rating-3"><i class="fa fa-star-o"></i></span> <span class="rating-4"><i class="fa fa-star-o"></i></span> <span class="rating-5"><i class="fa fa-star-o"></i></span>';
            } else if (sup_detail['supplier_rating']['count'] == 2.5) {
                star = '<span class="rating-1"><i class="fa fa-star"></i></span> <span class="rating-2"><i class="fa fa-star"></i></span> <span class="rating-3"><i class="fa fa-star-half-o"></i></span> <span class="rating-4"><i class="fa fa-star-o"></i></span> <span class="rating-5"><i class="fa fa-star-o"></i></span>';
            } else if (sup_detail['supplier_rating']['count'] == 3) {
                star = '<span class="rating-1"><i class="fa fa-star"></i></span> <span class="rating-2"><i class="fa fa-star"></i></span> <span class="rating-3"><i class="fa fa-star"></i></span> <span class="rating-4"><i class="fa fa-star-o"></i></span> <span class="rating-5"><i class="fa fa-star-o"></i></span>';
            } else if (sup_detail['supplier_rating']['count'] == 3.5) {
                star = '<span class="rating-1"><i class="fa fa-star"></i></span> <span class="rating-2"><i class="fa fa-star"></i></span> <span class="rating-3"><i class="fa fa-star"></i></span> <span class="rating-4"><i class="fa fa-star-half-o"></i></span> <span class="rating-5"><i class="fa fa-star-o"></i></span>';
            } else if (sup_detail['supplier_rating']['count'] == 4) {
                star = '<span class="rating-1"><i class="fa fa-star"></i></span> <span class="rating-2"><i class="fa fa-star"></i></span> <span class="rating-3"><i class="fa fa-star"></i></span> <span class="rating-4"><i class="fa fa-star"></i></span> <span class="rating-5"><i class="fa fa-star-o"></i></span>';
            } else if (sup_detail['supplier_rating']['count'] == 4.5) {
                star = '<span class="rating-1"><i class="fa fa-star"></i></span> <span class="rating-2"><i class="fa fa-star"></i></span> <span class="rating-3"><i class="fa fa-star"></i></span> <span class="rating-4"><i class="fa fa-star"></i></span> <span class="rating-5"><i class="fa fa-star-half-o"></i></span>';
            } else if (sup_detail['supplier_rating']['count'] == 5) {
                star = '<span class="rating-1"><i class="fa fa-star"></i></span> <span class="rating-2"><i class="fa fa-star"></i></span> <span class="rating-3"><i class="fa fa-star"></i></span> <span class="rating-4"><i class="fa fa-star"></i></span> <span class="rating-5"><i class="fa fa-star"></i></span>';
            }

            $('.rating-star').html(star);
            setTimeout(function() {
                hide_loader();
                if(localStorage.callout_auc == 0 || localStorage.getItem("callout_auc") === null) { 
                    show_callout_auc ();
                }
            }, 1000);
            
        },
        error: function (jqXHR, textStatus, errorThrown) {
            /*  if (textStatus === "timeout") {
             x_alert("You seem to have lost internet connection, please reconnect to get going"); window.location.href = "no_connection.html";
             }*/
        }
    });
}

function no_result(data) {
    if(data == 'undefined') {
        data = '';
    }
    var body = '<li class="no-result"><div class="oops-image"><img src="images/oops.png"/></div><div class=" oops-subtext-main">Sorry your search had no results</div><div class="oops-subtext">We don`t seem to have what you are looking for,<br><a onclick="search_feedback()" class="x-orange">click here</a> and we try to get it for you.</div></li>';
    if(data != '') {
        //console.log('no-result = > '+$('.no-result').length);
        if($('.no-result').length == 0) {
            $('.list').append(body);
        }
        $('.no-result').show();
    } else {
         $('.list').html(body);
    }   
}

function search_feedback() {
    $('.overlay').fadeIn();
    $('#search_feedback').fadeIn();
    $('body').bind('touchmove', function (e) {
        e.preventDefault();
    });
}

function search_feedback_send_close () {
    $('#search_feedback').fadeOut();
    $('body').unbind('touchmove');    
    $('.overlay').fadeOut();
}
function search_feedback_send_submit () {
    //search_feedback.php?json={"id":"1","user_id":"1","name":"Nitin Pandey1","email_id":"nitin@ezcommindia.com","product_name":"test","feedback":"dfsdfs","action":"insert","ip":"123.123.12.12"}
    if($('#product_name').val() == '') {
        x_alert('Please fill Product name.');
    } else {
    var json = '{"id":"","user_id":"'+rc4_dr(localStorage.user_id)+'","name":"'+localStorage.name+'","email_id":"'+localStorage.email_id+'","product_name":"'+$('#product_name').val()+'","feedback":"'+$('#feedback').val()+'","action":"insert","ip":""}';
    $.ajax({url: localStorage.host + 'search_feedback.php', data: {json: json}, type: 'get', success: function (info) {
        $('#search_feedback').fadeOut();   
        $('body').unbind('touchmove'); 
        $('.overlay').fadeOut();
    }
});
    }
   
}

function show_data_room(discount_value) {
        var final_status = [];
        var min_lot_id = [];
        var min_user_id = [];
        var dynamic_room  = '';
        var dynamic_lot  = [];
        var curr_value_dropdown = '';
        //for status winner or LIVE
        $(".f_well_for_count").each(function () {
            var og_lot = $(this).attr('og_lot');
            dynamic_room = $(this).attr('dynamic_room');
            dynamic_lot.push($(this).attr('dynamic_lot'));
            var dynamic_min_user = $(this).attr('dynamic_min_user');
            var dynamic_r_price = $(this).attr('dynamic_r_price');
            min_lot_id.push(og_lot);
            min_user_id.push(dynamic_min_user);
        });
        $.post(localStorage.host + '../classes/service_manage_auction.class.php?action=load_dynamic_auction_status&dn_r='+dynamic_room+'&dn_l='+min_lot_id+'&dn_min_user='+min_user_id+'&user_id='+localStorage.user_id+'&admin_id='+localStorage.user_id+'', {id:min_lot_id}, 
        function(data){
            var items = [];
            if(data){               
                $.each($.parseJSON(data), function(idx, obj) { 
                    $("#span_emd").html(numberWithCommas(obj.emd_left));
                    if(obj.tender_period =='No'){
                        tender_local_var = 'N';
                        if(obj.status != localStorage.bid_No_place__) {
                            $('.span_no_curr_bid_'+obj.dynamic_lot).removeClass('hide');
                            $('.span_no_my_bid_'+obj.dynamic_lot).removeClass('hide');
                            $('.span_curr_hyphen_'+obj.dynamic_lot).addClass('hide');
                            $('.span_my_hyphen_'+obj.dynamic_lot).addClass('hide');
                            $('.td_auto_bid').removeClass('hide');
                            $('.td_bid').removeClass('hide');
                            $('.div_tendor').addClass('hide');
                        }
                        if(!obj.my_bid){
                            $('.span_no_my_bid_'+obj.dynamic_lot).addClass('hide');
                            $('.span_my_hyphen_'+obj.dynamic_lot).removeClass('hide');
                        }
                        final_status[obj.dynamic_lot] = obj.status;
                        if(obj.dynamic_lot){
                            if($(".clock_"+dynamic_lot).html() != localStorage.auction_expired__){
                                $('.bid_status_'+obj.dynamic_lot).text(obj.status);
                            }
                            $('.curr_bid_'+obj.dynamic_lot).text(obj.curr_bid);
                            if(obj.total_bid !=0){ 
                                if($('.curr_bid_'+obj.dynamic_lot).text() != curr_value_dropdown){
                                    $.post(localStorage.host + '../classes/common.class.php?action=load_dynamic_drop_down&curr_val='+$('.curr_bid_'+obj.dynamic_lot).text()+'&min_inc='+$("#dd_"+obj.dynamic_lot).attr("min_incr_value")+'&actual_p='+$("#dd_"+obj.dynamic_lot).attr("actual_price")+'&auc_on='+$("#dd_"+obj.dynamic_lot).attr("auction_on")+'&user_id='+localStorage.user_id+'', {id:1}, 
                                    function(data){
                                        var items = [];
                                        if(data && !$("#dd_"+obj.dynamic_lot).hasClass( "active" )){
                                            curr_value_dropdown = $('.curr_bid_' + obj.dynamic_lot + '').text();
                                            $("select[id='dd_" + obj.dynamic_lot+"']").empty().append('<option value="Bid"> Bid </option>');
                                            $("select[id='dd_" + obj.dynamic_lot+"']").append(data); 
                                        }
                                    });
                                }
                            }else{
                                if(discount_value != curr_value_dropdown) { 
                                    $.post(localStorage.host + '../classes/common.class.php?action=load_dynamic_drop_down&curr_val='+$('.curr_bid_'+obj.dynamic_lot).text()+'&min_inc='+$("#dd_"+obj.dynamic_lot).attr("min_incr_value")+'&actual_p='+$("#dd_"+obj.dynamic_lot).attr("actual_price")+'&auc_on='+$("#dd_"+obj.dynamic_lot).attr("auction_on")+'&user_id='+localStorage.user_id+'', {id:1}, 
                                    function(data){
                                        var items = [];
                                        if(data && !$("#dd_"+obj.dynamic_lot).hasClass( "active" )){
                                            curr_value_dropdown = discount_value;
                                            $("select[id='dd_" + obj.dynamic_lot+"']").empty().append('<option value="Bid"> Bid </option>');
                                            $("select[id='dd_" + obj.dynamic_lot+"']").append(data);  
                                        }
                                    });
                                }
                            }
                            if(obj.my_bid)
                                $('.my_bid_'+obj.dynamic_lot).text(obj.my_bid);
                            if(obj.discount_value < 0)
                                $('.curr_per_bid_'+obj.dynamic_lot).text("+" + Math.abs(obj.discount_value)+'%');
                            else if(obj.discount_value)
                                $('.curr_per_bid_'+obj.dynamic_lot).text(obj.discount_value+'%');
                            if(obj.user_per<0)	
                                $('.my_per_bid_'+obj.dynamic_lot).text("+" + Math.abs(obj.user_per));
                            else if(obj.user_per)	
                                $('.my_per_bid_'+obj.dynamic_lot).text(obj.user_per);
                        }
                    }else if(obj.tender_period =='Yes'){
                        $('.td_auto_bid').addClass('hide');
                        $('.td_bid').addClass('hide');
                        $('.div_tendor').removeClass('hide');
                    }
                });
            }
        });
        var golden_time = $('#dd_'+dynamic_lot).attr('golden_time');
        var golden_time_value = $('#dd_'+dynamic_lot).attr('golden_time_value');  
        $.post(localStorage.host + '../classes/service_manage_auction.class.php?action=load_dynamic_end_date&room=Y&dn_r='+dynamic_room+'&dn_l='+dynamic_lot+'&golden_time='+golden_time+'&golden_time_value='+golden_time_value+'&user_id='+localStorage.user_id+'&admin_id='+localStorage.user_id+'', {id:min_lot_id}, 
        function(data){
            var items = [];
            if(data){ 
                var extended_time = 'N';
                $.each($.parseJSON(data), function(idx, obj) { 
                    var dynamic_lot = obj.dynamic_lot;
                    if(obj.countdown_date!='F'){
                        $('#dd_'+dynamic_lot).attr('golden_time',obj.golden_time); 
                        $(".clock_"+dynamic_lot).html(obj.countdown_date);
                    }
                    if(obj.countdown_date=='F'){
                        $(".clock_"+dynamic_lot).html(localStorage.auction_expired__);
                        $('.auto_bid').hide();	
                        $('#withdraw_'+dynamic_lot).addClass('hide');
                        $('#dd_'+dynamic_lot).addClass('hide');
                        $('#bid_now_button_'+dynamic_lot).addClass('hide');
                        if(final_status[obj.dynamic_lot]==localStorage.winner__){
                            $('#buy_now_'+dynamic_lot).removeClass('hide');
                            $('#bid_now_button_'+dynamic_lot).addClass('hide');
                            $('.msg_'+dynamic_lot).text(localStorage.won__);
                            $('.bid_status_'+dynamic_lot).text(localStorage.s_winner__ );
                            update_winner(dynamic_lot,dynamic_room,$('#dd_'+dynamic_lot).attr('reserve_price'));
                        }else{
                            $('.msg_'+dynamic_lot).text(localStorage.lost__);
                            $('.bid_status_'+dynamic_lot).text(localStorage.sold__);
                        }
                    } else {
                        extended_time = 'Y';
                    }
                    if (typeof obj.extra != 'undefined' && obj.extra !='' && extended_time=='Y'){
                        $( "#clock_").html(localStorage.ext_time);
                    }else if(obj.countdown_date!='F'){ 
                        $( "#clock_").html('<ul class="room-timer"><li><span class="tik-tak">' + obj.countdown_date.replace(",", '</span><span class="tik-tak-small">days</span></li><li><span class="tik-tak">').replace(":", '</span><span class="tik-tak-small">hrs</span></li><li><span class="tik-tak">').replace(":", '</span><span class="tik-tak-small">min</span></li><li><span class="tik-tak">') + '</span><span class="tik-tak-small">sec</span></li></ul>');
                    }else{
                        $( "#clock_").html(localStorage.auction_expired__);
                    }
                });
            }
        });
}


function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky-anchor').offset().top;
    if (window_top > div_top) {
        $('#sticky').addClass('stick');
        $('.stick').css('top', '0');
    } else {
        $('#sticky').removeClass('stick');
        $('.stick').css('top', 'none');
    }
}



setInterval(function () {
    if (window.location.href.indexOf("signin") < 0 && window.location.href.indexOf("register") < 0) {
        $.ajax({url: localStorage.host + '../classes/buyer_dashboard.class.php', data: {action: 'buyer_emd_details', type: 'webservice', user_id: localStorage.user_id}, type: 'get', success: function (data) {
                var bid = JSON.parse(data);
                // console.log(bid);
                if (bid['bid_balance'] != '') {
                    $('.bid-limit').html(bid['bid_balance']);
                }
                $('.emd-bal').html(numberWithCommas(bid['emd_balance']));
                localStorage.limit_val = bid['limit_val'];
                localStorage.emd_bal = numberWithCommas(bid['emd_balance']);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                /*    if (textStatus === "timeout") {
                 x_alert("You seem to have lost internet connection, please reconnect to get going"); window.location.href = "no_connection.html";
                 }*/
            }
        });
    }
}, 2000);
if (window.location.href.indexOf("dashboard") > -1) // This doesn't work, any suggestions?
{
    show_loader();
}

function detectBrowser() {
    var N = navigator.appName;
    var UA = navigator.userAgent;
    var temp;
    var browserVersion = UA.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
    if (browserVersion && (temp = UA.match(/version\/([\.\d]+)/i)) != null)
        browserVersion[2] = temp[1];
    browserVersion = browserVersion ? [browserVersion[1], browserVersion[2]] : [N, navigator.appVersion, '-?'];
    return browserVersion;
}
;
//
//var time =  rc4_er('-1428398310');
//console.log(time);
//
//console.log(rc4_dr(time));

//if(window.MobileAccessibility){
function onBodyLoad() {
    document.addEventListener("deviceready", onDeviceReady, false);
}

/*function onDeviceReady() {
    window.MobileAccessibility.usePreferredTextZoom(false);
}*/


//}
setInterval(function () {
    //window.MobileAccessibility.usePreferredTextZoom(false);
    //console.log(typeof usePreferredTextZoom != 'undefined');
    if (typeof usePreferredTextZoom != 'undefined') {

        window.MobileAccessibility.usePreferredTextZoom(false);
    }
    window.MobileAccessibility.usePreferredTextZoom(false);
    if (typeof device != 'undefined') {
        if (device.platform == "Android") {
            // if (window.location.href.indexOf("auction_detail") < 0) {
            document.addEventListener("backbutton", onBackKeyDown, false);
            // } else {
            //document.addEventListener("backbutton", onBackKeyDown, false);
            // }
        }
    }
}, 500);
function x_alert(data) {
    // alert(data);
    navigator.notification.alert(data);
}
function version_check() {
    $.ajax({url: localStorage.host + 'app_version.php?app_type=' + localStorage.device, data: {}, type: 'get', success: function (data) {
            //  alert(data);
            var ver = setInterval(function () {
                if (typeof device != 'undefined') {
                    cordova.getAppVersion.getVersionNumber().then(function (version) {
                        clearInterval(ver);
                        var current_vr = version;
                        var msg = 'Newer version of XSTOK is released. Please update the app now.';
                        var title = 'Update app';
                        var buttonlabels = 'Update,Cancel';
                        if (current_vr != data) {

                            version_confirm(msg, title, buttonlabels);
                        }
                    });
                }
            }, 1000);

        }
    });
    // http://192.168.0.13/webservices/
}

function version_confirm(msg, title, buttonlabels) {

   /* if (confirm(msg) == true) {
        onConfirm_ver();
    } else {
        navigator.app.exitApp();
    }*/

     navigator.notification.confirm(
     msg,  // message
     function(index) {
         if (index == 1) {
             onConfirm_ver();
         }else {
              navigator.app.exitApp();
         }
     },                // callback to invoke with index of button pressed
     title,            // title
     buttonlabels          // buttonLabels
     );
    // navigator.app.exitApp();
}

function onConfirm_ver() {
    window.open('https://play.google.com/store/apps/details?id=com.centerac.xstok', '_system');
    navigator.app.exitApp();
}




function showEmdConfrim(confirmtitle,confirmbutton,confirmlink) {
/*  if (confirm(localStorage.EMD_over__) == true) {
        window.location.href = confirmlink;
    } else {

    }
    */
   navigator.notification.confirm(
     localStorage.EMD_over__,  // message
     function (index) {
         if (index == 1) {
         window.location.href = confirmlink;
     }
     },                // callback to invoke with index of button pressed
     confirmtitle,            // title
     confirmbutton          // buttonLabels
     );
}


function showConfirm(msg, title, buttonlabels, link, dynamic_lot) {

    // http://192.168.0.13/classes/service_manage_auction.class.php?action=save_intial_bid_auction&user_id=d3&admin_id=d3&lot_id=d3&room_id=d7&golden_time=N&golden_time_value=d6d712&first_bid=172800&auction_on=discount&reserve_price=70&discount_value=144000&actual_price=480000&dynamic_min_user=d6&bid_type=All&tender_local_var=N

   /*if (confirm(msg) == true) {
       onConfirm(link, dynamic_lot);
   } else {
       
    }*/




   
  
     navigator.notification.confirm(
     msg,  // message
     function(index) {
         if (index == 1) {
             onConfirm(link,dynamic_lot);
         }
     },                // callback to invoke with index of button pressed
     title,            // title
     buttonlabels          // buttonLabels
      );
     
}

function confirm_ajax_call(val) {
    var dynamic_lot = $('#confirm_lot_id').val();
    if($('input[name=opt_auto_bid]:radio:checked').val()==1){
        var link = $('#first_option').val();
       // $('.msg_' + $('#confirm_lot_id').val()).load($('#first_option').val()).fadeIn('slow').delay(3000).fadeOut('slow');
    }else if($('input[name=opt_auto_bid]:radio:checked').val()==2){
        var link = $('#sec_option').val();
       // $('.msg_' + $('#confirm_lot_id').val()).load($('#sec_option').val()).fadeIn('slow').delay(3000).fadeOut('slow');
    }else{
        var link = val;
       // $('.msg_' + $('#confirm_lot_id').val()).load(val).fadeIn('slow').delay(3000).fadeOut('slow');
    }
    onConfirm(link, dynamic_lot);
} 

function onConfirm(link, dynamic_lot) { 
    $.ajax({url: link, data: {}, type: 'get', success: function (data) {
            $('.current_value').html(''); 
            auto_close();
            $('.msg_' + dynamic_lot).html(data).fadeIn('slow').delay(1000).show('slow');
            if(localStorage.tender_period == 'Yes') {   
               
                var ch = setInterval(function() {
                     
                    var t = $('.msg_' + dynamic_lot+' a').attr('href');
                    /*if(t != '') {
                        t =t.replace('/buyer_dashboard?action=emd_details','dashboard.html#buyer_emd_details');
                    }*/
                    $('.msg_' + dynamic_lot+' a').attr('href',t);
                },1000);               
                if($('.msg_' + dynamic_lot).html()!=localStorage.EMD_over__){ 
                   
                    $('.msg_' + dynamic_lot).fadeIn('slow').delay(1000).fadeOut('slow');
                    var tender_msg = '';
                    var __st_date = new Date(localStorage.tender_period_date);
                    var mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; 
                    var __st_date_text =  mL[__st_date.getMonth()]  + ' ' +__st_date.getDate() + ', ' + __st_date.getFullYear() + ' at ' +formatAMPM(__st_date);
                    tender_msg = localStorage.your_result__.replace('__st_date',__st_date_text);
                    var __end_date = new Date(localStorage.end_date); 
                    var __end_date_text = formatAMPM(__end_date);
                    tender_msg = tender_msg.replace('__end_date',__end_date_text);
                    $('.span_show_text').html(tender_msg);
                    $('#dd_' + dynamic_lot).attr('tender_bid_detail','Yes');
                    $('.bid_now_button').attr("disabled","true");
                    $('.bid_now_button').hide();
                    $('.aut-type-1').html('Interest Registered');
                }     else {
                   $('.tender-box').css('color','#eee');  
                }            
            } else {  
               
                if($('.msg_' + dynamic_lot).html()==localStorage.EMD_over__){                    
                    $('.msg_' + dynamic_lot).fadeIn('slow').delay(1000).fadeOut('slow');
                    
                }
                $('.msg_' + dynamic_lot).fadeIn('slow').delay(1000).fadeOut('slow');
            }
           // $('.msg_' + dynamic_lot).hide().html(data).fadeIn('slow').delay(2000).fadeOut('slow');
           
            //$('.span_show_text').html(localStorage.your_result__);
            //$('.bid_now_button.btn-xstok.btn-buy-action').attr('disabled', true);
            //$('.bid_now_button.btn-xstok.btn-buy-action').hide();

        },
        error: function (jqXHR, textStatus, errorThrown) {
            //    if (textStatus === "timeout") {
            x_alert("You seem to have lost internet connection, please reconnect to get going"); window.location.href = "no_connection.html";
            //}
        }
    });
}
function onBackKeyDown() {// Handle the back button
    // alert(window.location.href.indexOf("auction_detail"));
    if (window.location.href.indexOf("auction_detail") < 0) {
        navigator.notification.confirm(
                'Are you sure want to exit?', // message
                function (index) {
                    if (index == 1) {//look at the docs for this part
                        navigator.app.exitApp();
                    }
                }, // callback to invoke with index of button pressed
                'Exit', // title
                'Yes,No' // buttonLabels
                );
    } else {
        navigator.app.backHistory();
    }
}


function insertIntoDb_shipping(event) {
    event.stopPropagation(); // Stop stuff happening
    event.preventDefault(); // Totally stop stuff happening     
    // Create a formdata object and add the files
    var data = new FormData();
    if ($('#form2').parsley('isValid') && $('#ship_to_message').val() != "") {
        var form_data = $('#form2').serialize();
        $.ajax({
            type: "POST",
            url: localStorage.host + '../classes/common.class.php?action=request_shipping_qoute_save',
            data: form_data,
            success: function (data) {
                if (data == 'Yes')
                    $('.ship_loader').html('completed');
                 x_alert('Email sent successfully');
                shipping_qoute_close();
               
            },
            error: function (jqXHR, textStatus, errorThrown) {
                $('.ship_loader').html(textStatus);
            }
        });
    } else {
        $('.ship_loader').html('Some Field Are missing');
    }
}

function insertIntoDb(event) {
    event.stopPropagation(); // Stop stuff happening
    event.preventDefault(); // Totally stop stuff happening

    // START A LOADING SPINNER HERE

    var data = new FormData();
    var form_data = $('#form').serialize();
    if ($('#form').parsley('isValid') && $('#auc_to_email').val() != "") {
        $.ajax({
            type: "POST",
            url: localStorage.host + '../classes/common.class.php?action=email_this_auction_save',
            data: form_data,
            success: function (data) {
                if (data == 'Yes')
                    $('.auc_loader').html('completed');
                x_alert('Email sent successfully');
                other_close();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                $('.auc_loader').html(textStatus);
            }
        });
    } else {
        $('.auc_loader').html('Some Field Are missing');
    }
}


function numberWithCommas(x){
    x=x.toString();
    var afterPoint = '';
    if(x.indexOf('.') > 0)
        afterPoint = x.substring(x.indexOf('.'),x.length);
    x = Math.floor(x);
    x=x.toString();
    var lastThree = x.substring(x.length-3);
    var otherNumbers = x.substring(0,x.length-3);
    if(otherNumbers != '')
        lastThree = ',' + lastThree;
    var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree  + afterPoint;;
    return res;
}

function deviceRegistered(id) {
    if (localStorage.logged_in == '1') {
        $.ajax({type: "GET", url: localStorage.host + 'device_reg.php', data: {i: rc4_dr(localStorage.user_id), r: id,d:localStorage.device}, success: function (data) {

            },
            error: function (jqXHR, textStatus, errorThrown) {

            }
        });
    }
}

function reg_function(devicecheck) {
    var pushNotification = window.plugins.pushNotification;
    if (device.platform == 'android' || device.platform == 'Android') {
        clearInterval(devicecheck);
        pushNotification.register(successHandler, errorHandler, {'senderID': '613170519629', 'ecb': 'onNotificationGCM'});
    } else {
        clearInterval(devicecheck);
        pushNotification.register(tokenHandler, errorHandler, {"badge": "true", "sound": "true", "alert": "true", "ecb": "onNotificationAPN"});
    }
}

function successHandler(result) {
    console.log('Success: ' + result);
}
function errorHandler(error) {
    console.log('Error: ' + error);
}
function onNotificationGCM(e) {
    switch (e.event) {
        case 'registered':
            if (e.regid.length > 0) {
                deviceRegistered(e.regid);
            }
            break;
        case 'message':
            if (e.foreground) {
               
            }
            break;
        case 'error':
            console.log('Error: ' + e.msg);
            break;
        default:
            console.log('An unknown event was received');
            break;
    }
}

function tokenHandler(result) {
    //  $("#app-status-ul").append('<li>token: ' + result + '</li>');
    // Your iOS push server needs to know the token before it can push to this device
    // here is where you might want to send it the token for later use.
}

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

function pay_emd () {
    window.location.href = "dashboard.html#buyer_emd_details";
}

function remove_notification(id,user_id){
    if(id=="" || user_id==""){ 
        $('#alert_modal_msg').html('Error!');
        $( ".alert_modal_open" ).trigger( "click" );
    } else {
        $.getJSON(localStorage.host + "../classes/buyer_dashboard.class.php?action=remove_notification&id=" + id + "&user_id=" + user_id, function (data) {
            if(data['msg']=="success"){
                var count_note = $('.notifications-count').text().split('(')[1];
                count_note = count_note.split(')')[0];
                count_note = parseFloat(count_note) - 1;
                if(count_note <= 0) {
                    $('.notifications-count').hide();
                } else {
                    $('.notifications-count').html('('+count_note+')');
                }
                $('#note'+id+user_id).remove();
                return true;
            } else {
                $('#alert_modal_msg').html('Error!');
                $( ".alert_modal_open" ).trigger( "click" );
                return false;
            }
        });
    }
}

function allnumeric(inputtxt){ 
    var numbers = /^[0-9]+$/;  
    if($('.'+inputtxt).val().match(numbers))   {        
    } else {  
        var value = $('.'+inputtxt).val();
        value = value.substring(0, $('.'+inputtxt).val().length - 1);
        $('.'+inputtxt).val(value);
        $('.'+inputtxt).focus();
        x_alert('Please input numeric characters only');
        
    }  
}  

function date_fution (date) {
    var dateStr=date; //returned from mysql timestamp/datetime field
    var a=dateStr.split(" ");
    var d=a[0].split("-");
    var t=a[1].split(":");
    var start_date = new Date(d[0],(d[1]-1),d[2],t[0],t[1],t[2]);
    return start_date;
}

function RoundTo(number, roundto){
    return roundto * Math.round(number/roundto);
}
 
function remove_watchlist(lot_id){
    event.stopPropagation();
    /*if (confirm('Remove auction from watchlist?') == true) {
         confirm_watchlist(lot_id);
    } else {
        
    }*/ 
  
    navigator.notification.confirm(
    'Remove auction from watchlist?',  // message
    function(index) {
        if (index == 1) {
            confirm_watchlist(lot_id);
        }
    }, 
    'Remove from watchlist',
    'Yes,No'
            );
}

function confirm_watchlist(lot_id){  
    var user_id =localStorage.user_id;
    $.getJSON(localStorage.host + "../classes/buyer_dashboard.class.php?action=remove_watchlist&lot_id=" + lot_id + "&user_id=" + user_id, function (data) {
        if(data['status']=="success"){
            $('.watchlist_'+lot_id).each(function(){
                $(this).remove();
            });
        }
    });
}