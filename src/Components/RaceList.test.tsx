import React from 'react';
import { render, screen } from '@testing-library/react';
import {RaceList} from './RaceList';

const races: any = [
    {
      "race_id": "062b9554-d14e-4f3f-9e46-71e62bd66e77",
      "race_name": "Prix Du Quebec",
      "race_number": 5,
      "meeting_id": "4ce0844c-ce1e-48dc-9c96-38df14f49aa5",
      "meeting_name": "Dieppe",
      "category_id": "9daef0d7-bf3c-4f50-921d-8e818c60fe61",
      "advertised_start": {
        "seconds": 1630419000
      },
      "race_form": {
        "distance": 1800,
        "distance_type": {
          "id": "570775ae-09ec-42d5-989d-7c8f06366aa7",
          "name": "Metres",
          "short_name": "m"
        },
        "distance_type_id": "570775ae-09ec-42d5-989d-7c8f06366aa7",
        "track_condition": {
          "id": "906cd562-a37c-11e7-a5c6-0ab32e6ac8d2",
          "name": "Soft",
          "short_name": "soft"
        },
        "track_condition_id": "906cd562-a37c-11e7-a5c6-0ab32e6ac8d2",
        "weather": {
          "id": "3d4f4967-4328-11e8-91cf-06cd88845500",
          "name": "Mostly Cloudy",
          "short_name": "mostly cloud",
          "icon_uri": "Mostly-Cloudy"
        },
        "weather_id": "3d4f4967-4328-11e8-91cf-06cd88845500",
        "race_comment": "BLACK HAWK (2) arrives unexposed delivering claiming debut and is interesting wearing first time blinkers. More than capable. PIC SYLVER (8) was runner-up beaten 1.25L at Vichy in a 1600m claimer. Can be considered. ALBERT BRIDGE (9) finished sixth in a 1900m Argentan handicap. Previously placed second tackling claimers. Thereabouts. NEO CHIC (5) completes the shortlist.",
        "additional_data": "{\"gait\":\"Gallop\",\"prizes\":[{\"type\":\"total_value\",\"value\":\"$30,645\"}],\"start_time\":\"31/08/2021 23:40:00 PM\"}",
        "generated": 1,
        "silk_base_url": "drr38safykj6s.cloudfront.net",
        "race_comment_alternative": "BLACK HAWK (2) arrives unexposed delivering claiming debut and is interesting wearing first time blinkers. More than capable. PIC SYLVER (8) was runner-up beaten 1.25L at Vichy in a 1600m claimer. Can be considered. ALBERT BRIDGE (9) finished sixth in a 1900m Argentan handicap. Previously placed second tackling claimers. Thereabouts. NEO CHIC (5) completes the shortlist."
      },
      "venue_id": "32c6127b-e0dc-47eb-90df-d319d7b488ac",
      "venue_name": "Dieppe",
      "venue_state": "FR",
      "venue_country": "FR"
    },
    {
      "race_id": "16326eb2-dfab-4a04-8ef2-26f1b435c2ef",
      "race_name": "264Mtrs (D3)",
      "race_number": 4,
      "meeting_id": "9ea96309-c2c4-423c-bb54-8501dd52a8b6",
      "meeting_name": "Monmore",
      "category_id": "9daef0d7-bf3c-4f50-921d-8e818c60fe61",
      "advertised_start": {
        "seconds": 1630417320
      },
      "race_form": {
        "distance": 264,
        "distance_type": {
          "id": "570775ae-09ec-42d5-989d-7c8f06366aa7",
          "name": "Metres",
          "short_name": "m"
        },
        "distance_type_id": "570775ae-09ec-42d5-989d-7c8f06366aa7",
        "track_condition": {
          "id": "1706d200-a75b-11e7-96c3-0656c85e309e",
          "name": "Slow",
          "short_name": "slow"
        },
        "track_condition_id": "1706d200-a75b-11e7-96c3-0656c85e309e",
        "weather": {
          "id": "08e5f78c-1a36-11eb-9269-cef03e67f1a3",
          "name": "FINE",
          "short_name": "fine",
          "icon_uri": "FINE"
        },
        "weather_id": "08e5f78c-1a36-11eb-9269-cef03e67f1a3",
        "race_comment": "Racing Post Top picks 5,4,6",
        "additional_data": "{\"gait\":\"Gallop\",\"classes\":[\"D3\"],\"prizes\":[{\"type\":\"total_value\",\"value\":\"125\"}],\"start_time\":\"31/08/2021 11:12:00 PM\"}",
        "generated": 1,
        "silk_base_url": "drr38safykj6s.cloudfront.net",
        "race_comment_alternative": "Racing Post Top picks 5,4,6"
      },
      "venue_id": "077a3fe7-3e02-417c-adf1-58c458bb3417",
      "venue_name": "Monmore",
      "venue_state": "UK",
      "venue_country": "UK"
    },
    {
      "race_id": "6a4f0983-2c85-4eb9-9a91-05365150a81e",
      "race_name": "Terry Mills Handicap",
      "race_number": 3,
      "meeting_id": "3e412996-89d8-4613-9aa4-8b8ae2bd48c6",
      "meeting_name": "Epsom Downs",
      "category_id": "9daef0d7-bf3c-4f50-921d-8e818c60fe61",
      "advertised_start": {
        "seconds": 1630417800
      },
      "race_form": {
        "distance": 1209,
        "distance_type": {
          "id": "570775ae-09ec-42d5-989d-7c8f06366aa7",
          "name": "Metres",
          "short_name": "m"
        },
        "distance_type_id": "570775ae-09ec-42d5-989d-7c8f06366aa7",
        "track_condition": {
          "id": "10a14653-a33d-11e7-810d-0a1a4ae29bd2",
          "name": "Good",
          "short_name": "good"
        },
        "track_condition_id": "10a14653-a33d-11e7-810d-0a1a4ae29bd2",
        "weather": {
          "id": "3d4f4967-4328-11e8-91cf-06cd88845500",
          "name": "Mostly Cloudy",
          "short_name": "mostly cloud",
          "icon_uri": "Mostly-Cloudy"
        },
        "weather_id": "3d4f4967-4328-11e8-91cf-06cd88845500",
        "race_comment": "SPRING BLOOM (5) receives weight from all. This consistent performer holds chances wearing cheek-pieces for the first time which may bring about more improvement. A reproduction of his close second at Sandown could prove to be enough in this contest. EVASIVE POWER (2) is a previous course and distance winner. Returns to Epsom for the first time since which could ignite a spark. DELEGATE THIS LORD (4) showed up well at Bath on seasonal return however failed to build on that at Salisbury. Needs to bounce back. KIMIFIVE (1) struggled previously so cheek-pieces are added for the first time.",
        "additional_data": "{\"gait\":\"Gallop\",\"classes\":[\"C3\"],\"prizes\":[{\"type\":\"total_value\",\"value\":\"$26,465\"}],\"start_time\":\"31/08/2021 23:20:00 PM\"}",
        "generated": 1,
        "silk_base_url": "drr38safykj6s.cloudfront.net",
        "race_comment_alternative": "SPRING BLOOM (5) receives weight from all. This consistent performer holds chances wearing cheek-pieces for the first time which may bring about more improvement. A reproduction of his close second at Sandown could prove to be enough in this contest. EVASIVE POWER (2) is a previous course and distance winner. Returns to Epsom for the first time since which could ignite a spark. DELEGATE THIS LORD (4) showed up well at Bath on seasonal return however failed to build on that at Salisbury. Needs to bounce back. KIMIFIVE (1) struggled previously so cheek-pieces are added for the first time."
      },
      "venue_id": "48b410f4-09c0-4fdc-800d-f7df8d211692",
      "venue_name": "Epsom Downs",
      "venue_state": "UK",
      "venue_country": "UK"
    },
    {
      "race_id": "6d5bc77e-e260-4bdf-a3a3-611b31031ca6",
      "race_name": "Thursday Nights, Under The Lights Stakes",
      "race_number": 5,
      "meeting_id": "a4fa4792-d13a-445f-b014-9e296a2f6995",
      "meeting_name": "Sunderland Bags",
      "category_id": "9daef0d7-bf3c-4f50-921d-8e818c60fe61",
      "advertised_start": {
        "seconds": 1630418940
      },
      "race_form": {
        "distance": 261,
        "distance_type": {
          "id": "570775ae-09ec-42d5-989d-7c8f06366aa7",
          "name": "Metres",
          "short_name": "m"
        },
        "distance_type_id": "570775ae-09ec-42d5-989d-7c8f06366aa7",
        "track_condition": {
          "id": "10a14653-a33d-11e7-810d-0a1a4ae29bd2",
          "name": "Good",
          "short_name": "good"
        },
        "track_condition_id": "10a14653-a33d-11e7-810d-0a1a4ae29bd2",
        "weather": {
          "id": "5ba75165-3cec-11eb-88bb-36fbfdf5d97f",
          "name": "OCAST",
          "short_name": "ocast",
          "icon_uri": "OCAST"
        },
        "weather_id": "5ba75165-3cec-11eb-88bb-36fbfdf5d97f",
        "race_comment": "Racing Post Top picks 1,4,2",
        "additional_data": "{\"gait\":\"Gallop\",\"classes\":[\"D3\"],\"prizes\":[{\"type\":\"total_value\",\"value\":\"117\"}],\"start_time\":\"31/08/2021 11:39:00 PM\"}",
        "generated": 1,
        "silk_base_url": "drr38safykj6s.cloudfront.net",
        "race_comment_alternative": "Racing Post Top picks 1,4,2"
      },
      "venue_id": "bf83b5fa-4e14-4466-816a-e6c6a30ea5b1",
      "venue_name": "Sunderland Bags",
      "venue_state": "UK",
      "venue_country": "UK"
    },
    {
      "race_id": "6fbe9ca6-e73a-4752-a4e6-76b961f78df8",
      "race_name": "Prix Du Restaurant Panoramique",
      "race_number": 8,
      "meeting_id": "42d8649f-530b-48db-8025-cf95828262ca",
      "meeting_name": "La Capelle",
      "category_id": "9daef0d7-bf3c-4f50-921d-8e818c60fe61",
      "advertised_start": {
        "seconds": 1630417920
      },
      "race_form": {
        "distance": 2750,
        "distance_type": {
          "id": "570775ae-09ec-42d5-989d-7c8f06366aa7",
          "name": "Metres",
          "short_name": "m"
        },
        "distance_type_id": "570775ae-09ec-42d5-989d-7c8f06366aa7",
        "track_condition": {
          "id": "10a14653-a33d-11e7-810d-0a1a4ae29bd2",
          "name": "Good",
          "short_name": "good"
        },
        "track_condition_id": "10a14653-a33d-11e7-810d-0a1a4ae29bd2",
        "weather": {
          "id": "3d4f4967-4328-11e8-91cf-06cd88845500",
          "name": "Mostly Cloudy",
          "short_name": "mostly cloud",
          "icon_uri": "Mostly-Cloudy"
        },
        "weather_id": "3d4f4967-4328-11e8-91cf-06cd88845500",
        "silk_base_url": "drr38safykj6s.cloudfront.net"
      },
      "venue_id": "0ece5f37-4803-4756-ba37-8ad26a1f3f50",
      "venue_name": "La Capelle",
      "venue_state": "FR",
      "venue_country": "FR"
    },
    {
      "race_id": "72cde5f9-6a33-4d79-b28d-2153ab690069",
      "race_name": "@Sunderlanddogs Stakes",
      "race_number": 4,
      "meeting_id": "a4fa4792-d13a-445f-b014-9e296a2f6995",
      "meeting_name": "Sunderland Bags",
      "category_id": "9daef0d7-bf3c-4f50-921d-8e818c60fe61",
      "advertised_start": {
        "seconds": 1630418040
      },
      "race_form": {
        "distance": 261,
        "distance_type": {
          "id": "570775ae-09ec-42d5-989d-7c8f06366aa7",
          "name": "Metres",
          "short_name": "m"
        },
        "distance_type_id": "570775ae-09ec-42d5-989d-7c8f06366aa7",
        "track_condition": {
          "id": "10a14653-a33d-11e7-810d-0a1a4ae29bd2",
          "name": "Good",
          "short_name": "good"
        },
        "track_condition_id": "10a14653-a33d-11e7-810d-0a1a4ae29bd2",
        "weather": {
          "id": "5ba75165-3cec-11eb-88bb-36fbfdf5d97f",
          "name": "OCAST",
          "short_name": "ocast",
          "icon_uri": "OCAST"
        },
        "weather_id": "5ba75165-3cec-11eb-88bb-36fbfdf5d97f",
        "race_comment": "Racing Post Top picks 1,3,5",
        "additional_data": "{\"gait\":\"Gallop\",\"classes\":[\"D5\"],\"prizes\":[{\"type\":\"total_value\",\"value\":\"113\"}],\"start_time\":\"31/08/2021 11:24:00 PM\"}",
        "generated": 1,
        "silk_base_url": "drr38safykj6s.cloudfront.net",
        "race_comment_alternative": "Racing Post Top picks 1,3,5"
      },
      "venue_id": "bf83b5fa-4e14-4466-816a-e6c6a30ea5b1",
      "venue_name": "Sunderland Bags",
      "venue_state": "UK",
      "venue_country": "UK"
    },
    {
      "race_id": "777a14d5-41a2-4b88-859e-6f43bd5a729e",
      "race_name": "480Mtrs (A9)",
      "race_number": 5,
      "meeting_id": "9ea96309-c2c4-423c-bb54-8501dd52a8b6",
      "meeting_name": "Monmore",
      "category_id": "9daef0d7-bf3c-4f50-921d-8e818c60fe61",
      "advertised_start": {
        "seconds": 1630418520
      },
      "race_form": {
        "distance": 480,
        "distance_type": {
          "id": "570775ae-09ec-42d5-989d-7c8f06366aa7",
          "name": "Metres",
          "short_name": "m"
        },
        "distance_type_id": "570775ae-09ec-42d5-989d-7c8f06366aa7",
        "track_condition": {
          "id": "1706d200-a75b-11e7-96c3-0656c85e309e",
          "name": "Slow",
          "short_name": "slow"
        },
        "track_condition_id": "1706d200-a75b-11e7-96c3-0656c85e309e",
        "weather": {
          "id": "08e5f78c-1a36-11eb-9269-cef03e67f1a3",
          "name": "FINE",
          "short_name": "fine",
          "icon_uri": "FINE"
        },
        "weather_id": "08e5f78c-1a36-11eb-9269-cef03e67f1a3",
        "race_comment": "Racing Post Top picks 4,6,3",
        "additional_data": "{\"gait\":\"Gallop\",\"classes\":[\"A9\"],\"prizes\":[{\"type\":\"total_value\",\"value\":\"105\"}],\"start_time\":\"31/08/2021 11:32:00 PM\"}",
        "generated": 1,
        "silk_base_url": "drr38safykj6s.cloudfront.net",
        "race_comment_alternative": "Racing Post Top picks 4,6,3"
      },
      "venue_id": "077a3fe7-3e02-417c-adf1-58c458bb3417",
      "venue_name": "Monmore",
      "venue_state": "UK",
      "venue_country": "UK"
    }
];

const delRace = (raceId: string) => {};

test('renders loading screen', () => {
    render(<RaceList races={races} category="9daef0d7-bf3c-4f50-921d-8e818c60fe61" deleteRace={delRace} displayCount={5} />);
    const linkElement = screen.getByText(/Loading..../);
    expect(linkElement).toBeInTheDocument();
  });

test('renders races table', () => {
    let futureRaces = races.map((race: any) => {
        race.advertised_start.seconds = Date.now() + 10000000;
        return race;
    });
    render(<RaceList races={futureRaces} category="9daef0d7-bf3c-4f50-921d-8e818c60fe61" deleteRace={delRace} displayCount={5} />);
    const linkElement = screen.getByText(/Venue/);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders exactly 5 races', () => {
    let futureRaces = races.map((race: any) => {
        race.advertised_start.seconds = Date.now() + 10000000;
        return race;
    });
    render(<RaceList races={futureRaces} category="9daef0d7-bf3c-4f50-921d-8e818c60fe61" deleteRace={delRace} displayCount={5} />);
    const raceRows = screen.getAllByTestId('race-row');
    expect(raceRows.length).toBe(5);
  });