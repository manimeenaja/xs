/*----------------DEFINED START-------------------*/

//localStorage.host = "http://192.168.0.13/webservices/";
//localStorage.host = "http://192.168.0.12/webservices/";
//localStorage.host = "http://beta.xstok.com/webservices/";
localStorage.host = "http://fa.xstok.com/webservices/";
//localStorage.host = "http://www.xstok.com/webservices/";
localStorage.device = 'Android';
localStorage.vr = 'new';
localStorage.key_code = 'euhe68vjdr1aX4F091c7aCggSMBf0A7M';
localStorage.curate_auction = 1;
localStorage.private_auction = 2;
localStorage.closed_bid_auction = 3;
localStorage.assorted_auction = 4;
localStorage.reserve_value_auction = 5;
localStorage.marketplace_auction = 6;
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
localStorage.bid_winner__ = "Sorry you can't bid again, you are the highest bidder";
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
localStorage.out_of_stock__ = 'Out of Stock';
localStorage.withdraw_msg__ = 'You have Withdrawn';
localStorage.auction_cancel__ = 'Auction has been cancelled';
localStorage.withdraw_winner_msg__ = "Sorry you can't withdraw from this auction, you are the highest bidder";
localStorage.withdraw_sure_msg__ = "Are you sure, you want to withdraw from this lot?";
localStorage.withdraw_empty__ = 'You are not participating in this Auction';
localStorage.bid_auto_place_alredy__ = 'You have already placed an autobid for same amount!!';
localStorage.bid_auto_place_succ__ = 'Your Autobid is placed and its active';
localStorage.bid_numeric_error = 'Please enter numeric characters only';
localStorage.bid_place_error = 'Place Higher Bid';
localStorage.auto_bid_place_error = 'Auto bid should be higher than the current price';
localStorage.auto_bid_place_error_unit_price = 'Auto bid should be higher than the current per unit price';
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
localStorage.confirm_place_bid = 'Confirm bid of ';
localStorage.confirm_offer_of_bid = "Confirm offer of ";
localStorage.confirm_place_auto_bid = 'Confirm Auto bid of ';
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
localStorage.your_interest__ = 'This auction is under Presale Review period. The bidding will start on __st_date to __end_date. <br /><br /> <b>This auctions requires EMD of <i class="fa fa-inr"></i> __rs (__x% of List Price) </b><br /><br />It takes 24 hrs to create an escrow account for first time buyers.<br /><br />Pay EMD now and be ready for bidding by clicking below.<br /><br />';
//localStorage.first_bid_msg__ = 'Confirm your bid of Rs. confirm_bid__  Note: this will block EMD of Rs. og_emd__.';
localStorage.first_bid_msg__ = 'Confirm your bid of Rs. confirm_bid__ unit_price_value__ Note: this will block EMD of Rs. og_emd__.';
localStorage.emd_bid_msg__ = 'You are registering interest in this auction. Your EMD of Rs. og_emd__ will be blocked.';
localStorage.direct_buy_now_popup_txt = 'Confirm direct Buy option.';
localStorage.block_emd_buy_now = 'Confirm Buy Now!  EMD of Rs. amount___ will be blocked';
localStorage.confirm_auto_choose_val_ = 'Your auto bid value doesn\'t match auction minimum increment value <br /> <br />Choose from one of the values below';
localStorage.confirm_offer_with_msg__ = 'Confirm offer of Rs. confirm_bid__. Note: If your offer is above the Reserve Price, EMD of Rs. og_emd__ will be blocked.';
localStorage.time_left__ = 'Time Left';
localStorage.presale_time_left = 'Review time left';
localStorage.presale = 'Presale Review';
localStorage.pay_emd = 'Pay EMD';
localStorage.emd_list_price_limit = 200000;
localStorage.not_participating__ = 'You are not participating in this auction';
localStorage.increase_bid__ = 'Update Offer';
localStorage.offer_bid_place_error = 'Offer should be higher than the current price';
localStorage.offer_bid_place_error_unit_price = 'Offer should be higher than the per unit price';
localStorage.bid_place_error_unit_price_100_reserve = 'You have entered Per Unit value more than 100% of Reserve price';
localStorage.bid_place_error_price_100_reserve = 'You have entered value more than 100% of Reserve price';
localStorage.offer_multiple_of = 'Offer must be multiple of ';
localStorage.s_winner__ = 'Winner';
localStorage.ext_time = 'Extended time 2 mins';
localStorage.final_my_bid__ = 'Final Price';
localStorage.your_offer_high = 'Your offer is the highest';
localStorage.your_offer_not_high = 'Your offer is not highest';
localStorage.reserve_price_not_met_ = 'Reserve price not met';
localStorage.reserve_price_met_ = 'Reserve price met';
localStorage.confirm_auto_choose_val_ = "Your auto bid value doesn't match auction minimum increment value <br /> <br />Choose from one of the values below";
localStorage.confirm_100_per_auto_bid = "You have entered price of more than 100% of the start value. Do you wish to continue?";
localStorage.no_connection = "You seem to have lost internet connection, please reconnect to get going";
localStorage.hide_list_p_percent = 1;
localStorage.supp_id_list_array = [1470, 1868];
/*----------------DEFINED END-------------------*/
var my_awesome_script = document.createElement('script');
my_awesome_script.setAttribute('src', 'js/fastclick.js');
document.head.appendChild(my_awesome_script);
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function () {
        setTimeout(function () {
            FastClick.attach(document.body);
            window.open = cordova.InAppBrowser.open;
        }, 2000);
    }, false);
}
function back() {
    window.history.back();
}
function x_alert(data) {
    //alert(data);
    navigator.notification.alert(data);
}
function auction_detail(id, auc_type_id) {
    //window.location.href = 'auction_detail.html#' + id;
    if (auc_type_id == localStorage.closed_bid_auction) {
        window.location.href = 'closed_bid_auction.html#' + id;
        // include_once 'closed_bid_auction.php'
    } else if (auc_type_id == localStorage.curate_auction) {
        window.location.href = 'curate_auction.html#' + id;
        //include_once 'curate_auction.php';
    } else if (auc_type_id == localStorage.private_auction) {
        window.location.href = 'private_auction.html#' + id;
        //include_once 'private_auction.php';
    } else if (auc_type_id == localStorage.assorted_auction) {
        window.location.href = 'assorted_auction.html#' + id;
        //include_once 'assorted_auction.php';
    } else if (auc_type_id == localStorage.reserve_value_auction) {
        window.location.href = 'reserve_value_auction.html#' + id;
        //include_once 'assorted_auction.php';
    } else if (auc_type_id == localStorage.marketplace_auction) {
        window.location.href = 'marketplace_auction.html#' + id;
        //include_once 'assorted_auction.php';
    }
}
function coming_soon() {
    x_alert('This auction will become live soon. We will notify you when it becomes live.');
}
function auction_room(lot_id, room_id) {
    window.location.href = 'auction_room.html#' + lot_id + '-' + room_id;
}
function shipping_detail(lot_id, room_id) {
    window.location.href = 'shipping_detail.html#' + lot_id + '-' + room_id;
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
function home_select(search_category, search_category_name, search_table_name, type) {
    if (localStorage.logged_in == '1') {
        if (type == 0) {
            localStorage.search_category = search_category;
            localStorage.search_table_name = search_table_name;
            localStorage.search_category_name = search_category_name;
            redirect('search');
        } else if (type == 1) {
            redirect(search_table_name);
        } else if (type == 2) {
            window.open(search_table_name, "_system");
        }
    } else {
        redirect('signin');
    }
}
function all_listing() {
    localStorage.search_category = '';
    localStorage.search_category_name = 'All Category';
    localStorage.search_table_name = '';
    window.location.href = "search.html";
}
function add_contact() {
    var contact = navigator.contacts.create();
    contact.displayName = "XSTOK Support";
    contact.nickname = "XSTOK";       //specify both to support all devices

    var phoneNumbers = [];
    phoneNumbers[0] = new ContactField('mobile', '+919833273172', true);
    contact.phoneNumbers = phoneNumbers;
    var emails = [];
    emails[0] = new ContactField('work', 'info@xstok.com', true);
    contact.emails = emails;
    contact.name = "XSTOK";

    // save to device
    contact.save(add_contact_onSuccess, add_contact_onError);
}

function add_contact_onSuccess(contact) {
    if (device.platform == "Android") {
        if (localStorage.contact == 1) {
            cordova.plugins.Whatsapp.send("9833273172");
        } else {
            setTimeout(function () {
                localStorage.contact = 1;
                cordova.plugins.Whatsapp.send("9833273172");
            }, 3000);
        }
    }
}

function add_contact_onError(contactError) {
    // alert("Error = " + contactError.code);
}

function add_menu(location, type, show_logo, options, events) {
    var type_menu = 'x-orange';
    var show_logo_menu = 'hide';
    var options_menu = 'hide';
    var events_menu = 'hide';
    var events_menu_cal = 'hide';
    if (typeof type == 'undefined') {
        type = 0;
    }
    if (typeof show_logo == 'undefined') {
        show_logo = 0;
    }
    if (typeof options == 'undefined') {
        options = 0;
    }
    if (typeof events == 'undefined') {
        events = 0;
    }
    if (type == 0) {
        type_menu = '';
    } else if (type == 2) {
        type_menu = 'xstok-text-black';
    }
    if (show_logo == 1) {
        show_logo_menu = '';
    }
    if (events == 1) {
        events_menu = '';
    } else if (events == 2) {
        events_menu_cal = '';
    }
    if (options == 1) {
        options_menu = '';
    }
    if (localStorage.toggle == 'gird') {
        var view = 'list';
        var view_type = 'grid';
    } else {
        var view = 'th-large';
        var view_type = 'list';
    }
    // var
    /*if(location=='home') {
     
     }*/
    if (localStorage.cover_pic_path == '' || localStorage.getItem("cover_pic_path") === null) {
        localStorage.cover_pic_path = 'images/xs_dash_offline.png';
    }
    if (localStorage.profile_pic == '' || localStorage.getItem("profile_pic") === null) {
        localStorage.profile_pic = 'images/user.jpg';
    }
    if (localStorage.company_name == '' || localStorage.getItem("company_name") === null) {
        localStorage.company_name = '';
    }
    if (localStorage.emd_bal == '' || localStorage.getItem("emd_bal") === null) {
        localStorage.emd_bal = 0;
    }
    var profile = '';
    if (location == 'dashboard') {
        profile = '<a href="profile.html" class="right  height-56 padding-lr-10 x-grey font-bold"><img src="' + localStorage.profile_pic + '" class="circle dash-profile-image-img left" alt="Profile Picture"> ' + localStorage.name + ' </a>';
    }
    $('#menu-add').html('<ul id="slide-out" class="side-nav grey lighten-5"><li class="padding-top-15 left-align main" style="background: -webkit-linear-gradient(top, rgba(0,0,0,0.0), rgba(0,0,0,0.6)), url(' + localStorage.cover_pic_path + ');background-size: cover;"><span class="image-menu logged_in "><img src="' + localStorage.profile_pic + '" class="circle profile-image-img left" alt="Profile Picture"></span><br><span class="name-menu logged_in "><a class="white-text line-height-1 text-transform-capitalize" href="profile.html">' + localStorage.name + '</a></span><br><span class="logged_in ext-transform-capitalize">EMD Balance: <i class="fa fa-inr"></i> <span class="emd-bal">' + localStorage.emd_bal + '</span></span></li><li class="main_option homeactive"><a href="home.html"><span class="menu-icon"><i class="mdi-action-home"></i></span><span class="menu-text"> Home</span></a></li><li class="main_option allactive logged_in verified" onclick="all_listing()"><a href="javascript:void(0)"><span class="menu-icon"><i class="mdi-social-public"></i></span><span class="menu-text"> Ongoing Sales</span></a></li><li class="main_option dashboardactive logged_in verified"><a href="dashboard.html"><span class="menu-icon"><i class="mdi-social-poll"></i></span><span class="menu-text"> Dashboard</span></a></li><li class="main_option roomactive logged_in verified"><a href="all_events.html"><span class="menu-icon"><i class="fa fa-gavel"></i></span><span class="menu-text">  All Events </span></a></li><li class="main_option calendaractive logged_in verified"><a href="calendar.html"><span class="menu-icon"><i class="mdi-editor-insert-invitation"></i></span><span class="menu-text"> Calendar</span></a></li><li class="main_option watchlistactive logged_in verified"><a href="watchlist.html"><span class="menu-icon"><i class="fa fa-heart " style="font-size: 21px  !important;"></i></span><span class="menu-text"> WatchList</span><span class="menu_count watchlist_count"></span></a></li><li class="main_option notificationsactive logged_in verified"><a href="notifications.html"><span class="menu-icon"><i class="fa fa-bell " style="font-size: 21px  !important;"></i></span><span class="menu-text">  Notifications </span><span class="menu_count notification_count"></span></a></li><li class="main_option cartactive logged_in verified"><a href="shipping_detail.html#d7-0"><span class="menu-icon"><i class="fa fa-truck " style="font-size: 21px  !important;"></i></span><span class="menu-text">  Cart</span><span class="menu_count cart_count"></span></a></li><div class="divider"></div><li onclick="redirect(\'story\')"><a href="javascript:void(0)"> Our Story</a></li><li onclick="redirect(\'buyer_protection\')"><a href="javascript:void(0)">  Buyer Protection </a></li><li onclick="redirect(\'work_with_us\')"><a href="javascript:void(0)">  Work With Us </a></li><li onclick="redirect(\'contact\')"><a href="javascript:void(0)">  Contact Us </a></li><div class="divider"></div><li class="logged_in"><a href="logout.html"><i class="fa fa-power-off"></i>  Sign Out</a></li><li class="logged_out"><a href="signin.html"><i class="fa fa-sign-in"></i>  Login</a></li></ul><a href="#" data-activates="slide-out" class="button-collapse ' + type_menu + '"><i class="mdi-navigation-menu"></i></a>' + profile + '<a href="#" class="right  height-56 ' + show_logo_menu + '"><img class="height-56" src="images/logo.png"></a><a href="#" class="font-24 ' + events_menu + '">Events</a><a href="#" class="font-24 ' + events_menu_cal + '">Calendar</a><a href="#" class="button-grid ' + options_menu + '" view="' + view_type + '"><i class="fa fa-' + view + '"></i></a><a href="#" class="button-search ' + options_menu + '"><div class="input-field"><input id="search" type="search" required><label for="search"><i class="fa fa-search"></i></label></div></a>');

    if (localStorage.logged_in == '0' || localStorage.getItem("logged_in") === null) {
        $('.logged_in').hide();
        $('.side-nav li.main:first-child').removeAttr('style');
        $('.side-nav li.main:first-child').css('background', 'url(' + localStorage.cover_pic_path + ')');
        $('.side-nav li.main:first-child').css('background-size', 'cover');
    } else {
        $('.logged_out').hide();
    }
    if (localStorage.verified == '0' || localStorage.getItem("verified") === null) {
        $('.verified').hide();
        /*$('.side-nav li.main:first-child').removeAttr('style');
         $('.side-nav li.main:first-child').css('background', 'url(' + localStorage.cover_pic_path + ')');
         $('.side-nav li.main:first-child').css('background-size', 'cover');*/
    } else {
        $('.verified').show();
    }
    if (localStorage.notification_count == '' || localStorage.getItem("notification_count") === null || localStorage.notification_count == '0') {
        $('.notification_count').hide();
    } else {
        $('.notification_count').html(localStorage.notification_count);
    }
    if (localStorage.watchlist_count == '' || localStorage.getItem("watchlist_count") === null || localStorage.watchlist_count == '0') {
        $('.watchlist_count').hide();
    } else {
        $('.watchlist_count').html(localStorage.watchlist_count);
    }

    $('.' + location + 'active').addClass('active');
    $('.button-collapse').sideNav({
        menuWidth: 300, // Default is 240
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    });
}

function no_result(data) {
    if (data == 'undefined') {
        data = '';
    }
    var body = '<li class="no-result"><div class="oops-image hide"><img src="images/oops.png"/></div><div class=" oops-subtext-main">Sorry your search had no results</div><div class="oops-subtext">We don`t seem to have what you are looking for,<br><a onclick="$(\'#lookingfor\').openModal();" class="x-orange">click here</a> and we try to get it for you.</div></li>';
    if (data != '') {
        //console.log('no-result = > '+$('.no-result').length);
        if ($('.no-result').length == 0) {
            $('.search-list').html(body);
        }
        //$('.load').remove();
        $('.no-result').show();
        //if($('.no-result').is(':visible')) {
        //$('.load').remove();
        // }
    } else {
        $('.search-list').html(body);
    }
}
function search_loader() {
    $('.search-list').html();
    $('.search-list').html('<li class="center-align no-shadow loader"><div class="preloader-wrapper big active"><div class="spinner-layer spinner-blue-only loader-round"><div class="circle-clipper left"><div class="circle"></div></div><div class="gap-patch"><div class="circle"></div></div><div class="circle-clipper right"><div class="circle"></div></div></div></div></li> ');
    $('li.center-align.no-shadow').css('margin-top', $(window).height());
}
function rc4_er(string) {
    return bin2hex(rc4_fun(localStorage.key_code, string.toString()).toString());
}


function rc4_dr(string) {
    return rc4_fun(localStorage.key_code, hex2bin(string.toString())).toString();
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

function numberWithCommas(x, z) {
    x = x.toString();
    if (typeof z != 'undefined' || z == 1) {
        var afterPoint = '.0';
    } else {
        var afterPoint = '';
    }

    if (x.indexOf('.') > 0)
        afterPoint = x.substring(x.indexOf('.'), x.length);
    x = Math.floor(x);
    x = x.toString();
    var lastThree = x.substring(x.length - 3);
    var otherNumbers = x.substring(0, x.length - 3);
    if (otherNumbers != '')
        lastThree = ',' + lastThree;
    var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + afterPoint;
    return res;
}

function remove_watchlist(lot_id) {
    event.stopPropagation();
    /*if (confirm('Remove auction from watchlist?') == true) {
     confirm_watchlist(lot_id);
     } else {}*/

    navigator.notification.confirm(
            'Remove auction from watchlist?',
            function (index) {
                if (index == 1) {
                    confirm_watchlist(lot_id);
                }
            },
            'Remove from watchlist',
            'Yes,No'
            );
}
function confirm_watchlist(lot_id) {
    var user_id = localStorage.user_id;
    $.getJSON(localStorage.host + "../classes/buyer_dashboard.class.php?action=remove_watchlist&lot_id=" + lot_id + "&user_id=" + user_id, function (data) {
        if (data['status'] == "success") {
            $('.watchlist_' + lot_id).each(function () {
                $(this).remove();
            });
        }
    });
}
if (localStorage.logged_in == '1') {
    if (window.location.href.indexOf("home") > 0) {
        var devicecheck = setInterval(function () {
            var get_back = reg_function(devicecheck);
        }, 1000);
    }
    setInterval(function () {
        if (window.location.href.indexOf("filter") < 0 && window.location.href.indexOf("register") < 0 && window.location.href.indexOf("search") < 0 && window.location.href.indexOf("otp") < 0 && window.location.href.indexOf("kyc_single") < 0 && window.location.href.indexOf("no_connection") < 0) {
            $.ajax({url: localStorage.host + '../classes/buyer_dashboard.class.php', data: {action: 'buyer_emd_details', type: 'webservice', user_id: localStorage.user_id}, type: 'get', success: function (data) {
                    var bid = JSON.parse(data);
                    // console.log(bid);
                    if (bid['bid_balance'] != '') {
                        $('.bid-limit').html(bid['bid_balance']);
                    }
                    var emd_balance = bid['emd_balance'];
                    if (typeof bid['emd_balance'] == 'undefined') {
                        emd_balance = 0;
                    }
                    $('.emd-bal').html(numberWithCommas(emd_balance));
                    localStorage.limit_val = bid['limit_val'];
                    localStorage.emd_bal = numberWithCommas(emd_balance);
                    // localStorage.my_bid_val = bid['emd_balance'];
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    /*    if (textStatus === "timeout") {
                     x_alert("You seem to have lost internet connection, please reconnect to get going"); window.location.href = "no_connection.html";
                     }*/
                }
            });
        }
    }, 5000);
    setInterval(function () {
        if (window.location.href.indexOf("filter") < 0 && window.location.href.indexOf("register") < 0 && window.location.href.indexOf("no_connection") < 0) {
            $.ajax({url: localStorage.host + '../classes/buyer_dashboard.class.php', data: {action: 'buyer', days: '7', type: 'webservice', user_id: localStorage.user_id}, type: 'get', success: function (data) {
                    var info = JSON.parse(data);
                    //console.log(info);
                    localStorage.watchlist_count = info['wishlist_auction_table'].length;
                    localStorage.notification_count = info['notification_all'].length;
                    localStorage.cover_pic_path = info['user_detail']['cover_pic_path'];
                    //$('.main').css('background','-webkit-linear-gradient(top, rgba(0,0,0,0.0), rgba(0,0,0,0.6)), url('+info['user_detail']['cover_pic_path']+')');
                    $('.main').attr('style', 'background: -webkit-linear-gradient(top, rgba(0,0,0,0.0), rgba(0,0,0,0.6)), url(' + localStorage.cover_pic_path + ');background-size: cover;');
                    localStorage.profile_pic = info['user_detail']['profile_pic'];
                    localStorage.company_name = info['user_detail']['company_name'];
                    $('.watchlist_count').html(localStorage.watchlist_count);
                    $('.notification_count').html(localStorage.notification_count);
                    $('.company-menu').html(localStorage.company_name);
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    /*    if (textStatus === "timeout") {
                     x_alert("You seem to have lost internet connection, please reconnect to get going"); window.location.href = "no_connection.html";
                     }*/
                }
            });
        }
    }, 15000);
    if (window.location.href.indexOf("search") < 0 && window.location.href.indexOf("emd") < 0 && window.location.href.indexOf("index") < 0 && window.location.href.indexOf("filter") < 0 && window.location.href.indexOf("home") < 0 && window.location.href.indexOf("all_events") < 0 && window.location.href.indexOf("otp") < 0 && window.location.href.indexOf("kyc_single") < 0 && window.location.href.indexOf("shipping_detail") < 0 && window.location.href.indexOf("no_connection") < 0 && window.location.href.indexOf("welcome") < 0) {
        setInterval(function () {
            $.ajax({url: localStorage.host + '../classes/buyer_dashboard.class.php', data: {action: 'get_tym_ticker', lot_id: localStorage.lot_id_array, room_id: localStorage.room_id_array, user_id: localStorage.user_id}, type: 'get', success: function (data) {
                    var logininfo = JSON.parse(data);
                    // console.log(logininfo);
                    for (i in logininfo['active_status_ary']) {
                        if (logininfo['active_status_ary'][i] == "<span class='normal_status_lot'>Coming Soon</span>") {
                            $('.watchlist_' + i).attr('onclick', 'coming_soon()');
                        }
                        $('.status' + i).html(logininfo['active_status_ary'][i]);
                        setColorStatus(i);

                    }
                    for (i in logininfo['active_tym_ary']) {
                        $('.time' + i).html(logininfo['active_tym_ary'][i]);
                        //   console.log('.time'+i);
                    }
                    for (i in logininfo['tym_ary']) {
                        $('.timefull' + i).html(logininfo['tym_ary'][i].replace('<br>', ' : '));
                        //   console.log('.time'+i);
                    }
                    for (i in logininfo['active_current_bid_ary']) {
                        if (logininfo['auction_per_unit_ary'][i] == 'Y') {
                            $('.bid_amount' + i).html(logininfo['active_current_bid_per_ary'][i] + " Per Unit");
                        } else {
                            $('.bid_amount' + i).html(logininfo['active_current_bid_ary'][i]);
                        }
                        //  console.log('.bid_amount'+i);
                    }
                    $('td[class*="bid_amount"]').each(function () {
                        if ($(this).text() == '') {
                            $(this).html('-');
                        }
                    });
                    $('td[class*="status"]').each(function () {
                        if ($(this).text() == '') {
                            $(this).html('-');
                        }
                    });
                }
            });
        }, 1000);
    }
}
function setColorStatus(i) {
    if ($('.status' + i).text() == localStorage.winner__) {
        $('.status' + i).css('color', 'green');
    } else if ($('.status' + i).text() == localStorage.winning__) {
        $('.status' + i).css('color', 'green');
    } else if ($('.status' + i).text() == localStorage.live__) {
        $('.status' + i).css('color', 'green');
    } else if ($('.status' + i).text() == localStorage.won__) {
        $('.status' + i).css('color', 'green');
    } else if ($('.status' + i).text() == localStorage.lost__) {
        $('.status' + i).css('color', 'red');
    } else if ($('.status' + i).text() == localStorage.sold__) {
        $('.status' + i).css('color', 'red');
    } else if ($('.status' + i).text() == localStorage.losing__) {
        $('.status' + i).css('color', 'red');
    } else if ($('.status' + i).text() == localStorage.sold_out_) {
        $('.status' + i).css('color', 'red');
    } else if ($('.status' + i).text() == localStorage.out_bid_) {
        $('.status' + i).css('color', '#e74c3c');
    }
}

function allnumeric(inputtxt) {
    var numbers = /^\d*\.?\d*$/;
    if ($('.' + inputtxt).val().match(numbers)) {
    } else {
        var value = $('.' + inputtxt).val();
        value = value.substring(0, $('.' + inputtxt).val().length - 1);
        $('.' + inputtxt).val(value);
        $('.' + inputtxt).focus();
        allnumeric(inputtxt)
        //x_alert('Please input numeric characters only');
        //console.log($('.' + inputtxt).val().match(numbers));
    }
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
function get_product_with_lot_name(lot_id, hide_details_list_price_ctl) {
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
                        localStorage.image_slide += '|' + src;
                    }
                    table_body += '<div class="product_detail_list"><div class="product_images"><img src=" ' + image[0] + '" ></div><div class="product_details_text"><div class="product_titles_list"><b>Title</b> : ' + bid[i]['title'] + '</div><div class="product_quantity_list"><b>Quantity</b> : ' + bid[i]['unit'] + '</div>';
                    if (hide_details_list_price_ctl == "N")
                    {
                        table_body += '<div class="product_price_list"><b>Price/<span class="unit"></span></b> : <i class="fa fa-inr"></i> ' + numberWithCommas(bid[i]['price']) + '</div>';
                    }
                    table_body += '<div class="product_condition_list"><b>Condition</b> : ' + bid[i]['condition'] + '</div></div></div>';
                } else {
                    var src = bid[i]['image'];
                    if (image[j] == '') {
                        src = 'images/no_image.jpg';
                    }
                    table_body += '<div class="product_detail_list"><div class="product_images"><img src=" ' + src + '" ></div><div class="product_details_text"><div class="product_titles_list"><b>Title</b> : ' + bid[i]['title'] + '</div><div class="product_quality_list"><b>Quantity</b> : ' + bid[i]['unit'] + '</div>';
                    if (hide_details_list_price_ctl == "N")
                    {
                        table_body += '<div class="product_price_list"><b>Price/<span class="unit"></span></b> : <i class="fa fa-inr"></i> ' + numberWithCommas(bid[i]['price']) + '</div>';
                    }
                    table_body += '<div class="product_condition_list"><b>Condition</b> : ' + bid[i]['condition'] + '</div></div></div>';


                    $('.head-image').append('<div><img alt="xstok" class="head-image-img" src="' + bid[i]['image'] + '"></div>');
                    localStorage.image_slide += '|' + bid[i]['image'];
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
            }, 0);

            $('.product_details').html(table_body);
            $('.head-image-img').click(function () {
                var back = $(this).parent().prev().find('img').attr('src');
                $('#image').height($(window).outerHeight());
                $(".panzoom-elements").html('<img src="' + $(this).attr('src') + '">');
                $(".next_image").attr('onclick', 'next_image("' + $(this).attr('src') + '")');
                $(".back_image").attr('onclick', 'back_image("' + back + '")');
                $(".panzoom-elements").panzoom({
                    contain: 'invert'
//                    $reset: $('.image-close')
                            // maxScale: $(this).naturalWidth / $(this).clientWidth
                });
                $('.panzoom-elements').on("panzoomend", function (e, panzoom) {
                    var array = panzoom.getMatrix();
                    if (array[0] <= 1 && array[3] <= 1) {
                        $('.panzoom-elements').css('transform', 'none');
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
                $('.panzoom-elements').css('margin-top', ($(window).height() - $('.panzoom-elements').height()) / 2);
                $('#image').css('visibility', 'visible');
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
function get_packege_detail(lot_id, room_id) {
    $.ajax({url: localStorage.host + '../classes/service_manage_auction.class.php', data: {action: 'get_packege_detail', l_: lot_id, r_: room_id}, type: 'get', success: function (data) {
            var bid = JSON.parse(data);
            // var table_body = '<div class="row row-cancel-margin"><div class="col-xs-6"><span class="font-family-helvetica-bold">Gross Weight</span></div><div class="col-xs-6">' + bid[0]['gross_weight'] + '</div></div><div class="row row-cancel-margin"><div class="col-xs-6"><span class="font-family-helvetica-bold">Net Weight</span></div><div class="col-xs-6">' + bid[0]['net_weight'] + '</div></div><div class="row row-cancel-margin"><div class="col-xs-6"><span class="font-family-helvetica-bold">No Carton</span></div><div class="col-xs-6">' + bid[0]['no_carton'] + '</div></div><div class="row row-cancel-margin"><div class="col-xs-6"><span class="font-family-helvetica-bold">Location</span></div><div class="col-xs-6">' + bid[0]['location'] + '</div></div></div>';
            var gw = 'hide';
            if (bid[0]['gross_weight'] != '') {
                gw = '';
            }
            var nw = 'hide';
            if (bid[0]['net_weight'] != '') {
                nw = '';
            }
            var nc = 'hide';
            if (bid[0]['no_carton'] != '') {
                nc = '';
            }
            var l = 'hide';
            if (bid[0]['location'] != '') {
                l = '';
            }
            //var table_body = '<div class="row margin-bottom-0 white-text"><div class="col s4 ' + gw + '"><span class="">Gross Weight</span></div><div class="col s2 ' + gw + '">' + bid[0]['gross_weight'] + '</div><div class="col s4 ' + nw + '"><span class="">Net Weight</span></div><div class="col s2 ' + nw + '">' + bid[0]['net_weight'] + '</div></div><div class="row row-cancel-margin"><div class="col s4 ' + nc + '"><span class="">No Carton</span></div><div class="col s2 ' + nc + '">' + bid[0]['no_carton'] + '</div><div class="col s4 ' + l + '"><span class="">Location</span></div><div class="col s2 ' + l + '">' + bid[0]['location'] + '</div></div></div>';
            var table_body = '<div class="row margin-bottom-0 white-text"><div class="col s6 ' + l + '">Location : ' + bid[0]['location'] + '</div><div class="col s6 left-align ' + nc + '">No. Carton : ' + bid[0]['no_carton'] + '</div></div><div class="row margin-bottom-0 white-text"><div class="col s6 ' + gw + '">Gross Weight : ' + bid[0]['gross_weight'] + '</div><div class="col s6 left-align ' + nw + '">Net Weight : ' + bid[0]['net_weight'] + '</div></div>';
            $('.shipping').append(table_body);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            /*  if (textStatus === "timeout") {
             x_alert("You seem to have lost internet connection, please reconnect to get going"); window.location.href = "no_connection.html";
             }*/
        }
    });
}
function rating_star(rating_value, class_name) {
    var star = "";
    if (rating_value == null) {
        rating_value = 0;
    }
    if (rating_value > 0 && rating_value <= 0.5) {
        star = '<span class="rating-1"><i class="fa fa-star-half-o"></i></span> <span class="rating-2"><i class="fa fa-star-o"></i></span> <span class="rating-3"><i class="fa fa-star-o"></i></span> <span class="rating-4"><i class="fa fa-star-o"></i></span> <span class="rating-5"><i class="fa fa-star-o"></i></span>';
    } else if (rating_value > 0.5 && rating_value <= 1) {
        star = '<span class="rating-1"><i class="fa fa-star"></i></span> <span class="rating-2"><i class="fa fa-star-o"></i></span> <span class="rating-3"><i class="fa fa-star-o"></i></span> <span class="rating-4"><i class="fa fa-star-o"></i></span> <span class="rating-5"><i class="fa fa-star-o"></i></span>';
    } else if (rating_value > 1 && rating_value <= 1.5) {
        star = '<span class="rating-1"><i class="fa fa-star"></i></span> <span class="rating-2"><i class="fa fa-star-half-o"></i></span> <span class="rating-3"><i class="fa fa-star-o"></i></span> <span class="rating-4"><i class="fa fa-star-o"></i></span> <span class="rating-5"><i class="fa fa-star-o"></i></span>';
    } else if (rating_value > 1.5 && rating_value <= 2) {
        star = '<span class="rating-1"><i class="fa fa-star"></i></span> <span class="rating-2"><i class="fa fa-star"></i></span> <span class="rating-3"><i class="fa fa-star-o"></i></span> <span class="rating-4"><i class="fa fa-star-o"></i></span> <span class="rating-5"><i class="fa fa-star-o"></i></span>';
    } else if (rating_value > 2 && rating_value <= 2.5) {
        star = '<span class="rating-1"><i class="fa fa-star"></i></span> <span class="rating-2"><i class="fa fa-star"></i></span> <span class="rating-3"><i class="fa fa-star-half-o"></i></span> <span class="rating-4"><i class="fa fa-star-o"></i></span> <span class="rating-5"><i class="fa fa-star-o"></i></span>';
    } else if (rating_value > 2.5 && rating_value <= 3) {
        star = '<span class="rating-1"><i class="fa fa-star"></i></span> <span class="rating-2"><i class="fa fa-star"></i></span> <span class="rating-3"><i class="fa fa-star"></i></span> <span class="rating-4"><i class="fa fa-star-o"></i></span> <span class="rating-5"><i class="fa fa-star-o"></i></span>';
    } else if (rating_value > 3 && rating_value <= 3.5) {
        star = '<span class="rating-1"><i class="fa fa-star"></i></span> <span class="rating-2"><i class="fa fa-star"></i></span> <span class="rating-3"><i class="fa fa-star"></i></span> <span class="rating-4"><i class="fa fa-star-half-o"></i></span> <span class="rating-5"><i class="fa fa-star-o"></i></span>';
    } else if (rating_value > 3.5 && rating_value <= 4) {
        star = '<span class="rating-1"><i class="fa fa-star"></i></span> <span class="rating-2"><i class="fa fa-star"></i></span> <span class="rating-3"><i class="fa fa-star"></i></span> <span class="rating-4"><i class="fa fa-star"></i></span> <span class="rating-5"><i class="fa fa-star-o"></i></span>';
    } else if (rating_value > 4 && rating_value <= 4.5) {
        star = '<span class="rating-1"><i class="fa fa-star"></i></span> <span class="rating-2"><i class="fa fa-star"></i></span> <span class="rating-3"><i class="fa fa-star"></i></span> <span class="rating-4"><i class="fa fa-star"></i></span> <span class="rating-5"><i class="fa fa-star-half-o"></i></span>';
    } else if (rating_value > 4.5 && rating_value <= 5) {
        star = '<span class="rating-1"><i class="fa fa-star"></i></span> <span class="rating-2"><i class="fa fa-star"></i></span> <span class="rating-3"><i class="fa fa-star"></i></span> <span class="rating-4"><i class="fa fa-star"></i></span> <span class="rating-5"><i class="fa fa-star"></i></span>';
    } else {
        star = '<span class="rating-1"><i class="fa fa-star-o"></i></span> <span class="rating-2"><i class="fa fa-star-o"></i></span> <span class="rating-3"><i class="fa fa-star-o"></i></span> <span class="rating-4"><i class="fa fa-star-o"></i></span> <span class="rating-5"><i class="fa fa-star-o"></i></span>';
    }

    $('.' + class_name).html(star);
}
function supplier_detail(id) {

    $.ajax({url: localStorage.host + '../classes/supplier_dashboard.class.php', data: {action: 'dashboard', supplier_id: id, type: 'webservice'}, type: 'get', success: function (info) {
            var sup_detail = JSON.parse(info);
            // console.log(sup_detail);
            $('.supplier-name').html(sup_detail['user_detail']['company_name']);
            $('.rating-text').html(sup_detail['supplier_rating']['text']);
            setTimeout(function () {
                hide_loader();
                if (localStorage.callout_auc == 0 || localStorage.getItem("callout_auc") === null) {
                    show_callout_auc();
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
function get_unit(lot_unit) {
    $.ajax({
        url: localStorage.host + '../classes/service_manage_auction.class.php?action=get_unit_of_lot&unit_id=' + lot_unit,
        data: {},
        success: function (data) {
            localStorage.lot_unit__ = data;
            setInterval(function () {
                $('.unit').html(localStorage.lot_unit__);
                $('.span_unit_db').html(localStorage.lot_unit__);
            }, 100);
        }
    });
}
function RoundTo(number, roundto) {
    return roundto * Math.round(number / roundto);
}
function hide_loader() {
    /*$('body').unbind('touchmove');
     $('.overlay-loader').fadeOut();
     $('#auction_detail').fadeIn();
     $('.main-div').fadeIn();
     show_menu();*/
}

function callout(callout_class, title, body, next, pre) {
    title = '';
    var pre_body = '';
    if (pre != '0') {
        pre_body = '<span class="callout-pre" val="' + pre + '"><i class="fa fa-angle-double-left"></i> Previous</span>';
    }
    var next_body = '';
    if (next != '0') {
        next_body = '<span class="callout-next" val="' + next + '">Next <i class="fa fa-angle-double-right"></i></span>';
    }
    var call_body = '<div class="callout-head">' + title + '<span class="callout-close"><i class="fa fa-times"></i></span></div><div class="callout-body">' + body + '</div><div class="callout-footer">' + pre_body + '' + next_body + '</div>';
    $('.' + callout_class).html(call_body);
    $('.callout-close').click(function () {
        $('.callout').hide();
    });
    $('.callout-pre').click(function () {
        var val = $(this).attr('val');
        if (val == '1') {
            $('.callout').hide();
            $('.bid_drop_callout').show();
        } else if (val == '2') {
            $('.callout').hide();
            $('.auto_bid_callout').show();
        } else if (val == '3') {
            $('.callout').hide();
            $('.withdraw_callout').show();
        }
    });
    $('.callout-next').click(function () {
        var val = $(this).attr('val');
        if (val == '2') {
            $('.callout').hide();
            $('.auto_bid_callout').show();
        } else if (val == '3') {
            $('.callout').hide();
            $('.withdraw_callout').show();
        } else if (val == '4') {
            $('.callout').hide();
            $('.buy_now_call').show();
        }
    });
}

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

function showWithdrawDialog(room_id, lot_id, user_id, admin_id) {

    if ($('.bid_cal_' + lot_id).html() == localStorage.winner__ || $('.bid_cal_' + lot_id).html() == localStorage.bid_winner__) {
        // $('.msg_' + lot_id).empty().html(localStorage.withdraw_winner_msg__);
        //  $('.msg_' + lot_id).css('padding', '15px 1px');
        Materialize.toast(localStorage.withdraw_winner_msg__, 2000, 'x-red bold', function () {
            $('#toast-container').remove();
        });
        $('.msg_' + lot_id).empty().html(localStorage.withdraw_winner_msg__);
        setTimeout(function () {
            // $('.msg_' + lot_id).css('padding', '24px 1px');
        }, 2500);

    } else if (localStorage.my_bid_val.replace(/,/g, '') < 1) {
        Materialize.toast(localStorage.not_participating__, 2000, 'x-red bold', function () {
            $('#toast-container').remove();
        });
        //$('.msg_' + lot_id).empty().html(localStorage.not_participating__).delay(3000).fadeOut('slow').show();
    } else {
        var buttonlabels = 'Confirm,Cancel';
        /* if (confirm('Are you sure, you want to withdraw from this lot?') == true) {
         $('.msg_' + lot_id).load(localStorage.host + '../classes/service_manage_auction.class.php?action=withdraw_lot&user_id=' + user_id + '&admin_id=' + admin_id + '&lot_id=' + lot_id + '&room_id=' + room_id + '').delay(2000).fadeOut('slow').show();
         } else {
         }*/
        navigator.notification.confirm("Are you sure, you want to withdraw from this lot?", function (index) {
            if (index == 1) {
                $('.msg_' + lot_id).load(localStorage.host + '../classes/service_manage_auction.class.php?action=withdraw_lot&user_id=' + user_id + '&admin_id=' + admin_id + '&lot_id=' + lot_id + '&room_id=' + room_id + '', function (data) {
                    Materialize.toast($('.msg_' + lot_id).html(), 2000, 'x-red bold', function () {
                        $('#toast-container').remove();
                    });
                });
            }
        }, 'Confirm Withdraw', buttonlabels);
    }
}

function showConfirm(msg, title, buttonlabels, link, dynamic_lot) {

    // http://192.168.0.13/classes/service_manage_auction.class.php?action=save_intial_bid_auction&user_id=d3&admin_id=d3&lot_id=d3&room_id=d7&golden_time=N&golden_time_value=d6d712&first_bid=172800&auction_on=discount&reserve_price=70&discount_value=144000&actual_price=480000&dynamic_min_user=d6&bid_type=All&tender_local_var=N

    /* if (confirm(msg) == true) {
     onConfirm(link, dynamic_lot);
     } else {
     
     }*/
//need t*o change 





    navigator.notification.confirm(
            msg, // message
            function (index) {
                if (index == 1) {
                    onConfirm(link, dynamic_lot);
                }
            }, // callback to invoke with index of button pressed
            title, // title
            buttonlabels          // buttonLabels
            );

}



function onConfirm(link, dynamic_lot) {
    $.ajax({url: link, data: {}, type: 'get', success: function (data) {
            $('.current_value').html('');
            $('#autobid').closeModal();
            Materialize.toast(data, 2000, 'x-red bold', function () {
                $('#toast-container').remove();
            });
            $('.msg_' + dynamic_lot).html(data);
            if (localStorage.tender_period == 'Yes') {
                var ch = setInterval(function () {
                    var t = $('.msg_' + dynamic_lot + ' a').attr('href');
                    /*if(t != '') {
                     t =t.replace('/buyer_dashboard?action=emd_details','emd.html');
                     }*/
                    $('.msg_' + dynamic_lot + ' a').attr('href', t);
                }, 1000);
                if ($('.msg_' + dynamic_lot).html() != localStorage.EMD_over__) {
                    Materialize.toast($('.msg_' + dynamic_lot).html(), 2000, 'x-red bold', function () {
                        $('#toast-container').remove();
                    });
                    //$('.msg_' + dynamic_lot).fadeIn('slow').delay(1000).fadeOut('slow');
                    var tender_msg = '';
                    var __st_date = new Date(localStorage.tender_period_date);
                    var mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                    var __st_date_text = mL[__st_date.getMonth()] + ' ' + __st_date.getDate() + ', ' + __st_date.getFullYear() + ' at ' + formatAMPM(__st_date);
                    tender_msg = localStorage.your_result__.replace('__st_date', __st_date_text);
                    var __end_date = new Date(localStorage.end_date);
                    var __end_date_text = formatAMPM(__end_date);
                    tender_msg = tender_msg.replace('__end_date', __end_date_text);
                    $('.span_show_text').html(tender_msg);
                    $('#dd_' + dynamic_lot).attr('tender_bid_detail', 'Yes');
                    $('.bid_now_button').attr("disabled", "true");
                    $('.bid_now_button').hide();
                    $('.aut-type-1').html('Interest Registered');
                } else {
                    $('.tender-box').css('color', '#eee');
                }
            } else {
                if ($('.msg_' + dynamic_lot).html() == localStorage.EMD_over__) {
                    Materialize.toast($('.msg_' + dynamic_lot).html(), 2000, 'x-red bold', function () {
                        $('#toast-container').remove();
                    });
                    // $('.msg_' + dynamic_lot).fadeIn('slow').delay(1000).fadeOut('slow');
                }
                // $('.msg_' + dynamic_lot).fadeIn('slow').delay(1000).fadeOut('slow');
            }
            // $('.msg_' + dynamic_lot).hide().html(data).fadeIn('slow').delay(2000).fadeOut('slow');

            //$('.span_show_text').html(localStorage.your_result__);
            //$('.bid_now_button.btn-xstok.btn-buy-action').attr('disabled', true);
            //$('.bid_now_button.btn-xstok.btn-buy-action').hide();

        },
        error: function (jqXHR, textStatus, errorThrown) {
            //    if (textStatus === "timeout") {
            x_alert("You seem to have lost internet connection, please reconnect to get going");
            window.location.href = "no_connection.html";
            //}
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
function confirm_ajax_call(val) {
    var dynamic_lot = $('#confirm_lot_id').val();
    if ($('input[name=opt_auto_bid]:radio:checked').val() == 1) {
        var link = $('#first_option').val();
        // $('.msg_' + $('#confirm_lot_id').val()).load($('#first_option').val()).fadeIn('slow').delay(3000).fadeOut('slow');
    } else if ($('input[name=opt_auto_bid]:radio:checked').val() == 2) {
        var link = $('#sec_option').val();
        // $('.msg_' + $('#confirm_lot_id').val()).load($('#sec_option').val()).fadeIn('slow').delay(3000).fadeOut('slow');
    } else {
        var link = val;
        // $('.msg_' + $('#confirm_lot_id').val()).load(val).fadeIn('slow').delay(3000).fadeOut('slow');
    }
    onConfirm(link, dynamic_lot);
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
                $('#shipping_qoute').closeModal();
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
                $('#email_auction').closeModal();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                $('.auc_loader').html(textStatus);
            }
        });
    } else {
        $('.auc_loader').html('Some Field Are missing');
    }
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

function next_image(src) {
    $('.panzoom-elements').panzoom("resetZoom");
    var list = localStorage.image_slide.split('|');
    var place = list.indexOf(src);
    if (place >= 0) {
        if (place < (list.length - 1)) {
            $('.panzoom-elements').html("<img src='" + list[place + 1] + "'>");
            $(".next_image").attr('onclick', 'next_image("' + list[place + 1] + '")');
            return list[place + 1];
        } else {
            $('.panzoom-elements').html("<img src='" + list[0] + "'>");
            $(".next_image").attr('onclick', 'next_image("' + list[0] + '")');
            return list[0];
        }
    }
}

function back_image(src) {
    $('.panzoom-elements').panzoom("resetZoom");
    var list = localStorage.image_slide.split('|');
    var place = list.indexOf(src);
    if (place >= 0) {
        console.log(place + ' asdasd ' + (list.length - 1));
        if (place < (list.length - 1)) {
            console.log(place);
            console.log(list);
            console.log(localStorage.image_slide);
            console.log('up');
            console.log(list[place + 1]);
            $('.panzoom-elements').html("<img src='" + list[place + 1] + "'>");
            $(".back_image").attr('onclick', 'back_image("' + list[place + 1] + '")');
            return list[place + 1];
        } else {
            console.log(place);
            console.log(localStorage.image_slide);
            console.log('down');
            console.log(list[0]);
            $('.panzoom-elements').html("<img src='" + list[0] + "'>");
            $(".back_image").attr('onclick', 'back_image("' + list[0] + '")');
            return list[0];
        }
    }
}

function buy_now(lot_id, room_id, total_bid, buy_now, discount_value, actual_price) {
    // window.location.href = 'auction_buy_now.html#' + lot_id + '-' + room_id + '-' + d;
    var title = 'Buy Now';
    var buttonlabels = 'Confirm,Cancel';
    if ((actual_price / parseFloat(localStorage.limit_val)) < parseFloat(localStorage.emd_list_price_limit)) {
        var temp_actual_price = numberWithCommas(Math.round(parseFloat(actual_price) / parseFloat(localStorage.limit_val)));
    } else {
        var temp_actual_price = numberWithCommas(Math.round(localStorage.emd_list_price_limit));
    }

    /* if (confirm(localStorage.block_emd_buy_now + ' ' +temp_actual_price) == true) {
     buy_now_submit (lot_id, room_id, total_bid,buy_now,discount_value,actual_price);
     }*/
    if (parseFloat($('.head-bid-value-text').html().replace(/,/g, '')) > 0) {
        var msg = localStorage.direct_buy_now_popup_txt;
    } else {
        var msg = localStorage.block_emd_buy_now.replace('amount___', temp_actual_price);  // message
    }
    /*if (confirm(msg) == true) {
     buy_now_submit(lot_id, room_id, total_bid, buy_now, discount_value, actual_price);
     } else {
     
     }*/
    navigator.notification.confirm(
            msg,
            function (index) {
                if (index == 1) {
                    buy_now_submit(lot_id, room_id, total_bid, buy_now, discount_value, actual_price);
                }
            },
            title,
            buttonlabels
            );
    // navigator.app.exitApp();
}
function buy_now_submit(lot_id, room_id, total_bid, buy_now, discount_value, actual_price) {
    if (buy_now > 0) {
        $.post(localStorage.host + '../classes/service_manage_auction.class.php?action=save_buy_now_details&total_bids=' + total_bid + '&dn_r=' + room_id + '&dn_l=' + lot_id + '&user_id=' + localStorage.user_id + '&direct_pay_p=' + buy_now + '&r_price=' + discount_value + '&actual_price=' + actual_price, {id: ''},
        function (data) {
            if (data) {
                if (data == localStorage.EMD_over__) {
                    navigator.notification.confirm(
                            localStorage.EMD_over__,
                            function (index) {
                                if (index == 1) {
                                    window.location.href = 'emd.html';
                                }
                            },
                            'Insufficient EMD',
                            'Topup,Cancel'
                            );

                } else {
                    //console.log(data);
                    //console.log(data.split('/'));
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
function showmakeofferConfirm(confirmtitle, confirm_msg_, confirmbutton, confirmlink, dynamic_lot) {
    /* if (confirm(confirm_msg_) == true) {
     wholesale_makeoffer_submit(dynamic_lot, confirmlink);
     }*/

    navigator.notification.confirm(
            confirm_msg_, // message
            function (index) {
                if (index == 1) {
                    wholesale_makeoffer_submit(dynamic_lot, confirmlink);
                    //window.location.href = confirmlink;
                }
            }, // callback to invoke with index of button pressed
            confirmtitle, // title
            confirmbutton          // buttonLabels
            );
}
function wholesale_makeoffer_submit(lot_id, confirmlink) {
    $.ajax({
        url: confirmlink,
        data: {},
        success: function (data) {
            x_alert(data);
        }
    });
}
function showbuynowConfirm(confirmtitle, confirm_msg_, confirmbutton, confirmlink, dynamic_lot) {
    /*if (confirm(confirm_msg_) == true) {
     wholesale_buy_now_submit(dynamic_lot, confirmlink);
     }*/

    navigator.notification.confirm(
            confirm_msg_, // message
            function (index) {
                if (index == 1) {
                    wholesale_buy_now_submit(dynamic_lot, confirmlink);
                    //window.location.href = confirmlink;
                }
            }, // callback to invoke with index of button pressed
            confirmtitle, // title
            confirmbutton          // buttonLabels
            );
}
function wholesale_buy_now_submit(lot_id, confirmlink) {
    $.ajax({
        url: confirmlink,
        data: {},
        success: function (data) {
            shipping_detail(lot_id, '0');
        }
    });
}
function showEmdConfirm(confirmtitle, confirmbutton, confirmlink) {
    /*if (confirm(localStorage.EMD_over__) == true) {
     window.location.href = confirmlink;
     } else {
     
     }*/

    navigator.notification.confirm(
            localStorage.EMD_over__, // message
            function (index) {
                if (index == 1) {
                    window.location.href = confirmlink;
                }
            }, // callback to invoke with index of button pressed
            confirmtitle, // title
            confirmbutton          // buttonLabels
            );
}
function sample_request() {
    var sample_lot_id = localStorage.sample_lot_id;
    var sample_room_id = localStorage.sample_room_id;
    var sample_user_id = localStorage.user_id;

    $.ajax({
        url: localStorage.host + '../classes/common.class.php?action=request_for_sample&lot_id=' + rc4_er(sample_lot_id) + '&room_id=' + rc4_er(sample_room_id) + '&user_id=' + sample_user_id,
        data: {},
        success: function (data) {
            //console.log(data);
            var detail = JSON.parse(data);
            x_alert(detail.msg);
        }
    });
}

function download_exl(hash) {
    window.open(localStorage.host + '../classes/common.class.php?action=auction_download_product_detail&lot_id=' + hash, "_system");
}
function remove_notification(id, user_id) {
    event.stopPropagation();
    if (id == "" || user_id == "") {
        Materialize.toast('Error removing notification', 2000, 'x-red bold', function () {
            $('#toast-container').remove();
        });
    } else {
        $.getJSON(localStorage.host + "../classes/buyer_dashboard.class.php?action=remove_notification&id=" + id + "&user_id=" + user_id, function (data) {
            if (data['msg'] == "success") {
                var count_note = $('.notification_all-count').text().split('(')[1];
                count_note = count_note.split(')')[0];
                count_note = parseFloat(count_note) - 1;
                if (count_note <= 0) {
                    $('.notification_all-count').hide();
                } else {
                    $('.notification_all-count').html('(' + count_note + ')');
                }
                $('#' + id).remove();
                Materialize.toast('Successfully removed notification', 2000, 'bold font-17', function () {
                    $('#toast-container').remove();
                });
                return true;
            } else {
                Materialize.toast('Error removing notification', 2000, 'x-red bold', function () {
                    $('#toast-container').remove();
                });
                return false;
            }
        });
    }
}

function reg_function(devicecheck) {
    var push = PushNotification.init({"android": {"senderID": "613170519629"},
        "ios": {"alert": "true", "badge": "true", "sound": "true"}, "windows": {}});

    push.on('registration', function (data) {
        deviceRegistered(data.registrationId);
        clearInterval(devicecheck);
    });
    push.on('notification', function (data) {
        console.log("notification event");
        console.log(JSON.stringify(data));
        var cards = document.getElementById("cards");
        var push = '<div class="row">' +
                '<div class="col s12 m6">' +
                '  <div class="card darken-1">' +
                '    <div class="card-content black-text">' +
                '      <span class="card-title black-text">' + data.title + '</span>' +
                '      <p>' + data.message + '</p>' +
                '    </div>' +
                '  </div>' +
                ' </div>' +
                '</div>';
        cards.innerHTML += push;

    });

}
function deviceRegistered(id) {
    if (localStorage.logged_in == '1') {
        $.ajax({type: "GET", url: localStorage.host + 'device_reg.php', data: {i: rc4_dr(localStorage.user_id), r: id, d: localStorage.device}, success: function (data) {
                console.log('Updated');
                return 1;
            },
            error: function (jqXHR, textStatus, errorThrown) {

            }
        });
    }
}

function notification() {
}
var usePreferredTextZoomfun = setInterval(function () {
    if (typeof window.MobileAccessibility != 'undefined') {
        window.MobileAccessibility.usePreferredTextZoom(false);
        clearInterval(usePreferredTextZoomfun);
    }
}, 0);

function show_callout_auc() {
    /* $('.callout-dash').fadeIn();
     $('.callout-overlay').fadeIn();
     $('body').bind('touchmove', function (e) {
     e.preventDefault();
     });*/
    localStorage.callout_auc = 1;
}

function search_feedback_send_submit() {
    //search_feedback.php?json={"id":"1","user_id":"1","name":"Nitin Pandey1","email_id":"nitin@ezcommindia.com","product_name":"test","feedback":"dfsdfs","action":"insert","ip":"123.123.12.12"}
    if ($('#product_name').val() == '') {
        x_alert('Please fill Product name.');
    } else {
        var json = '{"id":"","user_id":"' + rc4_dr(localStorage.user_id) + '","name":"' + localStorage.name + '","email_id":"' + localStorage.email_id + '","product_name":"' + $('#product_name').val() + '","feedback":"' + $('#feedback').val() + '","action":"insert","ip":""}';
        $.ajax({url: localStorage.host + 'search_feedback.php', data: {json: json}, type: 'get', success: function (info) {
                $('#lookingfor').closeModal();
            }
        });
    }
}

function empty_watchlist(x) {
    event.stopPropagation();

    /*if (confirm('Remove auction from watchlist?') == true) {
     confirm_watchlist(lot_id);
     } else {
     
     }*/

    navigator.notification.confirm(
            'Remove all auctions from Watchlist?', // message
            function (index) {
                if (index == 1) {
                    confirm_empty_watchlist(x);
                }
            },
            'Clear watchlist',
            'Yes,No'
            );
    /* $('#watchlist_lot_id').val(x);
     $('#confirm_msg_all_m').html('Remove auction from Watchlist')
     $('.confirm_modal_all_open').trigger('click');*/
}
function confirm_empty_watchlist(lot_id) {
    var user_id = localStorage.user_id;
    $.getJSON(localStorage.host + "../classes/buyer_dashboard_inc.class.php?action=delete_wishlist&type=" + lot_id + "&user_id=" + user_id, function (data) {
        if (data['status'] == "success") {
            $.each(data['lot_id'], function (key, val) {
                $('.watchlist_' + val).each(function () {
                    $(this).remove();
                });
            });
            x_alert("All auctions removed successfully from the Watchlist");
        }
    });
}

setTimeout(function () {
    version_check();
}, 2000);


function version_check() {
    // /classes/.class.php?action=cart_count&u_=' . $enc_dec->encrypt_num($_SESSION['user_id'])

    $.ajax({url: localStorage.host + '../classes/buyer_dashboard_inc.class.php?action=cart_count&user_id=' + localStorage.user_id, data: {}, type: 'get', success: function (data) {
            var detail = JSON.parse(data);
            if (detail['cart_count'] != 0) {
                $('.cart_count').html(detail['cart_count']);
            }

        }
    });
    $.ajax({url: localStorage.host + 'app_version.php?app_type=' + localStorage.device, data: {}, type: 'get', success: function (data) {
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

    /*if (confirm(msg) == true) {
     onConfirm_ver();
     } else {
     navigator.app.exitApp();
     }*/

    navigator.notification.confirm(
            msg,
            function (index) {
                if (index == 1) {
                    onConfirm_ver();
                } else {
                    navigator.app.exitApp();
                }
            },
            title,
            buttonlabels
            );
    // navigator.app.exitApp();
}

function onConfirm_ver() {
    window.open('https://play.google.com/store/apps/details?id=com.centerac.xstok', '_system');
    navigator.app.exitApp();
}

function more_info() {
    $('.fixed-action-btn').removeClass('hide');
    $('.bid_now_main').removeClass('hide');
    $('.show-top-bid').removeClass('hide');
    $('.package_term').removeClass('hide');
    $('.more_info_div').addClass('hide');
    localStorage.more_info = 1;
    $('html, body').animate({
        scrollTop: $(".show-top-bid").offset().top - 53
    }, 500);
}

function find_platform() {
    //console.log(localStorage.device);
    if (typeof device == 'undefined') {
        return localStorage.device;
    } else {
        localStorage.device = device.platform;
        return localStorage.device;
    }

}

function infocus(lot_id) {
    var devicePlatform = find_platform();
    if (devicePlatform == 'iOS') {
        return $.trim($("#dd_" + lot_id + " option:selected").text()) == 'Bid';
    } else {
        return !$("#dd_" + lot_id).is(':focus');
    }
}

function date_fution(date) {
    var devicePlatform = find_platform();
    if (devicePlatform == 'iOS') {
        var dateStr = date; //returned from mysql timestamp/datetime field
        var a = dateStr.split(" ");
        var d = a[0].split("-");
        var t = a[1].split(":");
        var start_date = new Date(d[0], (d[1] - 1), d[2], t[0], t[1], t[2]);
        return start_date;
    } else {
        return date;
    }
}